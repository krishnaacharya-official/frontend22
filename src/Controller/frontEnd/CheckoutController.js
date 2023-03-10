import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FrontLoader from '../../Common/FrontLoader';
import Cart from '../../View/frontEnd/cart';
import cartApi from '../../Api/frontEnd/cart';
import authApi from '../../Api/admin/auth';
import ToastAlert from '../../Common/ToastAlert';
import Checkout from '../../View/frontEnd/checkout';
import orderApi from '../../Api/frontEnd/order';
import { validateAll } from 'indicative/validator';
import settingApi from '../../Api/admin/setting';
import helper, { getCalculatedPrice, priceFormat } from '../../Common/Helper';
import { useSelector, useDispatch } from 'react-redux';
import { setUserXp, setUserRank } from '../../user/user.action';
import userApi from '../../Api/frontEnd/user';
import Page from '../../components/Page';

export default function CheckoutController() {
  const [cartItem, setCartItem] = useState([]);
  const userAuthToken = localStorage.getItem('userAuthToken');
  const [loading, setLoading] = useState(false);
  const [update, setIsUpdate] = useState(false);
  const [subtotal, setSubTotal] = useState(0);
  const [subtotalWithTax, setSubtotalWithTax] = useState(0);

  const [total, setTotal] = useState(0);
  const [salesTax, setSalesTax] = useState(0);
  const [stripeTax, setStripeTax] = useState(0);

  const [xp, setXp] = useState(0);
  const CalculatedPrice = getCalculatedPrice();
  const currencySymbol = CalculatedPrice.currencySymbol();
  const getPricewithoutTax = CalculatedPrice.priceWithoutTax();
  const [xpForeEachItem, setXpForeEachItem] = useState(0);
  const dispatch = useDispatch();

  const getUserRank = async () => {
    const getRank = await userApi.getUserRank(userAuthToken);
    if (getRank) {
      if (getRank.data.success) {
        dispatch(setUserRank(getRank.data.rank));
      }
    }
  };

  const user = useSelector((state) => state.user);

  const userData = JSON.parse(localStorage.getItem('userData'));
  // const [pricingFees, setPricingFees] = useState({
  //     platformFee: 0,
  //     transactionFee: 0,

  // })
  // const { platformFee, transactionFee } = pricingFees

  const getSettingsValue = async () => {
    const getSettingsValue = await settingApi.list(userAuthToken, ['forEachItem']);
    if (getSettingsValue.data.data.length > 0) {
      let data = {};

      getSettingsValue.data.data.map((d, i) => {
        data[d.name] = d.value;
      });
      // console.log(data.forEachItem)
      setXpForeEachItem(Number(data.forEachItem));
    }
  };

  const params = useParams();
  const navigate = useNavigate();
  const [state, setstate] = useState({
    name: '',
    email: '',
    phone: '',
    stateName: '',
    city: '',
    country: '',
    zip: '382415',
    line1: 'address',
    cardNumber: '',
    cardExpMonth: '',
    cardExpYear: '',
    cardCVC: '',
    error: []
  });
  const {
    email,
    phone,
    name,
    stateName,
    city,
    line1,
    cardNumber,
    cardExpMonth,
    cardExpYear,
    cardCVC,
    country,
    zip
  } = state;

  useEffect(() => {
    (async () => {
      setLoading(false);
      if (userAuthToken) {
        const verifyUser = await authApi.verifyToken(userAuthToken);
        if (!verifyUser.data.success) {
          localStorage.clear();
          navigate('/login');
        }
      }
      await getSettingsValue();
      let data = {};
      // const getSettingsValue = await settingApi.list(userAuthToken, Object.keys(pricingFees));

      // if (getSettingsValue.data.success) {

      //     getSettingsValue.data.data.map((d, i) => {
      //         data[d.name] = d.value
      //     })

      //     setPricingFees({
      //         ...data
      //     })
      //     // user.settransactionFee(data.transactionFee)
      //     // user.setPlatformFee(data.platformFee)

      // }

      const getCartList = await cartApi.list(userAuthToken);
      if (getCartList.data.success === true) {
        setCartItem(getCartList.data.data);
        // console.log(getCartList.data.data)

        let tempPriceArray = [];
        let tempProductPriceArray = [];
        let ProductItems = []; // for count xp

        if (getCartList.data.data.length > 0) {
          getCartList.data.data.map((item, i) => {
            ProductItems.push(1 * item.quantity);
            // let transactionFee = data.transactionFee
            // let platformFee = data.platformFee
            // let totalCharge = Number(transactionFee) + Number(platformFee)

            // let price = CalculatedPrice.getData(item.productDetails?.price)
            // let price = CalculatedPrice.getData(item.productDetails?.price)
            let price = item.productDetails?.displayPrice
              ? item.productDetails?.displayPrice
              : item.productDetails?.price;

            // console.log('first',price)

            tempPriceArray.push(price * item.quantity);
            tempProductPriceArray.push(price * item.quantity);
          });

          let sum = tempPriceArray.reduce(function (a, b) {
            return a + b;
          }, 0);
          let sumSubTotal = tempProductPriceArray.reduce(function (a, b) {
            return a + b;
          }, 0);

          // console.log(sumSubTotal)

          let xpSum = ProductItems.reduce(function (a, b) {
            return a + b;
          }, 0);
          setXp(xpSum * xpForeEachItem);
          setSubtotalWithTax(Number(sumSubTotal));
          let salesTax = CalculatedPrice.calculateSalesTax(sum);
          // setSalesTax(salesTax)
          setTotal(sum + 0.3);
          // setStripeTax(CalculatedPrice.getTaxValueOfPrice(sum))
          setSalesTax(CalculatedPrice.getTaxValueOfPrice(sum));

          // setTotal(sum + salesTax)

          // setTotal(sum)

          setSubTotal(sum + 0.3);
        } else {
          navigate('/');
        }
      }
      setLoading(false);
      // console.log(salesTax,user.salesTax)
    })();
  }, [update, user.transactionFee, xpForeEachItem]);

  const pay = async () => {
    // if (cartItem.find(e => e.productDetails.tax === true)) {
    //     console.log(true)
    // } else {
    //     console.log(false)

    // }
    // console.log(CalculatedPrice.priceWithoutTax(Number(subtotal)))
    // return false

    setLoading(true);

    let chargesArray = [];

    if (cartItem && cartItem.length > 0) {
      cartItem.map((item, i) => {
        let tempObj = {};

        if (chargesArray.some((e) => e.id === item.productDetails.organizationDetails._id)) {
          let objIndex = chargesArray.findIndex(
            (obj) => obj.id === item.productDetails.organizationDetails._id
          );
          let amt = item.productDetails?.displayPrice
            ? item.productDetails?.displayPrice
            : item.productDetails?.price;
          chargesArray[objIndex].amount += amt * item.quantity;
        } else {
          tempObj.id = item.productDetails.organizationDetails._id;
          let amt = item.productDetails?.displayPrice
            ? item.productDetails?.displayPrice
            : item.productDetails?.price;
          tempObj.amount = amt * item.quantity;
          chargesArray.push(tempObj);
        }
      });
    }
    // console.log(chargesArray)

    const rules = {
      cardNumber: 'required',
      cardExpMonth: 'required',
      cardExpYear: 'required',
      cardCVC: 'required'
    };

    const message = {
      'cardNumber.required': 'Required.',
      'cardExpMonth.required': 'Required.',
      'cardExpYear.required': 'Required.',
      'cardCVC.required': 'Required.'
    };
    validateAll(state, rules, message)
      .then(async () => {
        const formaerrror = {};
        setstate({
          ...state,
          error: formaerrror
        });

        let data = {};
        data.name = userData.name;
        data.email = userData.email;
        data.city = city;
        data.state = stateName;
        data.line1 = line1;
        data.country = country;
        // data.amount = CalculatedPrice.getData(total)
        data.amount = total;
        data.cardNumber = cardNumber;
        data.cardExpMonth = cardExpMonth;
        data.cardExpYear = cardExpYear;
        data.cardCVC = cardCVC;
        data.postalCode = zip;
        data.phone = phone;
        data.currency = user.currency;
        data.chargesArray = chargesArray;
        data.subtotal = subtotal;
        let productIds = [];
        let p_ids = [];

        if (cartItem && cartItem.length > 0) {
          cartItem.map((item, i) => {
            let tempObj = {};
            tempObj.id = item.productDetails._id;
            tempObj.quantity = item.quantity;
            productIds.push(tempObj);
            p_ids.push(item.productDetails._id);
          });
          data.productIds = productIds;
          data.p_ids = p_ids;
        }

        const payment = await orderApi.payment(userAuthToken, data);
        if (payment) {
          if (!payment.data.success) {
            setLoading(false);
            ToastAlert({ msg: payment.data.message, msgType: 'error' });
          } else {
            let orderDetails = {};
            let productDetails = [];
            if (cartItem && cartItem.length > 0) {
              cartItem.map((item, i) => {
                let tempObj = {};
                let price = item.productDetails.displayPrice
                  ? item.productDetails.displayPrice
                  : item.productDetails.price;
                tempObj.id = item.productDetails._id;
                tempObj.quantity = item.quantity;
                tempObj.soldOut = item.productDetails.soldout;
                tempObj.productName = item.productDetails.headline;
                tempObj.productImage = item.productDetails.image;
                // tempObj.productPrice = CalculatedPrice.priceWithoutTax(item.productDetails.price)
                tempObj.productPrice = item.productDetails.displayPrice
                  ? item.productDetails.displayPrice
                  : item.productDetails.price;
                tempObj.tax = item.productDetails.tax;
                tempObj.unlimited = item.productDetails.unlimited;
                tempObj.postTag = item.productDetails.postTag;
                // tempObj.totalPrice = CalculatedPrice.priceWithoutTax(item.productDetails.price) * item.quantity
                tempObj.totalPrice = price * item.quantity;
                tempObj.taxPrice = (price - item.productDetails.price) * item.quantity;

                tempObj.organizationId = item.productDetails.organizationId;
                tempObj.organizationCountryId =
                  item.productDetails?.organizationDetails?.country_id;
                tempObj.productXp = item.quantity * Number(xpForeEachItem);

                productDetails.push(tempObj);
              });
            }
            orderDetails.email = userData.email;
            orderDetails.name = userData.name;
            orderDetails.currency = user.currency;
            orderDetails.currencySymbol = user.currencySymbol;
            orderDetails.transactionId = payment.data.data.id;
            orderDetails.paymentResponse = JSON.stringify(payment.data);
            orderDetails.subtotal = Number(subtotalWithTax);
            orderDetails.appliedTaxPercentage =
              Number(user.platformFee) + Number(user.transactionFee);
            orderDetails.platformFees = user.platformFee;
            orderDetails.transactionFees = user.transactionFee;
            orderDetails.tax = Number(subtotal) - Number(Number(subtotalWithTax));
            orderDetails.total = total;
            orderDetails.transactionStatus = payment.data.data.status;
            orderDetails.products = productDetails;
            orderDetails.xpToadd = xp;
            orderDetails.salesTaxPer = user.salesTax;
            orderDetails.salesTax = salesTax;

            if (cartItem.find((e) => e.productDetails.tax === true)) {
              orderDetails.taxRecipt = true;
            } else {
              orderDetails.taxRecipt = false;
            }

            const saveOrderDetails = await orderApi.saveOrderDetails(userAuthToken, orderDetails);

            if (!saveOrderDetails.data.success) {
              console.log(saveOrderDetails.data);
              setLoading(false);
              ToastAlert({ msg: saveOrderDetails.data.message, msgType: 'error' });
            } else {
              // await getUserRank()
              dispatch(setUserXp(user.xp + xp));
              const clearCart = await cartApi.clearCart(userAuthToken);
              if (clearCart.data.success) {
                navigate('/order/' + saveOrderDetails.data.orderId);
              }
              /*ToastAlert({ msg: saveOrderDetails.data.message, msgType: 'success' });*/
              setLoading(false);
            }

            //
          }
        } else {
          setLoading(false);
          ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }
      })
      .catch((errors) => {
        // console.log(errors)
        setLoading(false);
        const formaerrror = {};
        if (errors.length) {
          errors.forEach((element) => {
            formaerrror[element.field] = element.message;
          });
        } else {
          ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
        }

        setstate({
          ...state,
          error: formaerrror
        });
      });
  };

  const changevalue = (e) => {
    let value = e.target.value.replace(/[^\d.]|\.(?=.*\.)/g, '');
    setstate({
      ...state,
      [e.target.name]: value
    });
  };

  const removeCartItem = async (id) => {
    setLoading(false);
    const removeCartItem = await cartApi.deleteCartItem(userAuthToken, id);
    if (removeCartItem) {
      if (!removeCartItem.data.success) {
        setLoading(false);
        ToastAlert({ msg: removeCartItem.data.message, msgType: 'error' });
      } else {
        setIsUpdate(!update);
        /*ToastAlert({ msg: removeCartItem.data.message, msgType: 'success' });*/
        setLoading(false);
      }
    } else {
      setLoading(false);
      ToastAlert({ msg: 'Something went wrong', msgType: 'error' });
    }
  };

  return (
    <>
      {/* {console.log(cartItem)} */}
      {/*<FrontLoader loading={loading} />*/}
      <Page title="Donorport | Checkout ">
        <Checkout
          cartItem={cartItem}
          total={total}
          stateData={state}
          pay={pay}
          changevalue={changevalue}
          removeCartItem={removeCartItem}
          CalculatedPrice={CalculatedPrice}
          currencySymbol={currencySymbol}
          xp={xp}
          salesTax={salesTax}
          subtotal={subtotal}
          salesTaxPer={user.salesTax}
          transactionFee={user.transactionFee}
          stripeTax={stripeTax}
          isLoading={loading}
          // pricingFees={pricingFees}
        />
      </Page>
    </>
  );
}
