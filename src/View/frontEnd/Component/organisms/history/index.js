import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

// import { WidgetTitle, TagTitle } from "../../Component";
import WidgetTitle from '../../atoms/widget-title';
import TagTitle from '../../atoms/tag-title';
import HistoryItem from '../../molecules/history-item';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function History(props) {
  const [loadMore, setLoadMore] = useState(false);
  const userAuthToken = localStorage.getItem('userAuthToken');
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [historyList, setHistoryList] = useState([]);

  let list = props.list;
  let donationList = props.donationList;

  let tempOrderList = [];
  let tempDonationList = [];

  useEffect(() => {
    if (list?.length > 0) {
      list.map((v, k) => {
        v.listType = 'order';
        tempOrderList = tempOrderList.filter(function (item, pos, self) {
          return self.indexOf(item) === pos;
        });
        tempOrderList.push(v);
      });
    }

    if (donationList?.length > 0) {
      donationList.map((v1, k1) => {
        v1.listType = 'donation';
        tempDonationList = tempDonationList.filter(function (item, pos, self) {
          return self.indexOf(item) === pos;
        });
        tempDonationList.push(v1);
      });
    }

    let finalList = tempDonationList.concat(tempOrderList);
    setHistoryList(finalList);
    setLoadMore(false);
  }, [list, donationList]);

  // console.log("donationList", donationList)
  // console.log("list", list)

  return (
    <>
      <TagTitle>History</TagTitle>
      <WidgetTitle href="/log">Purchase Log</WidgetTitle>

      <div className="log__wrap">
        <div className="log__recent border-bottom">
          <div className="log__avatar avatar--title">
            <div className="log__avatar__img avatar__img--recent">
              {/* <i className="fa-solid fa-clock"></i> */}
              <FontAwesomeIcon icon={solid('clock')} />
            </div>
          </div>
          <div className="action__info">
            <div className="log__title">
              <div>{historyList?.length} Recent Donations</div>
              <div className="billing__type">15 days</div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled">
          {historyList?.length > 0 &&
            historyList
              .sort(function (a, b) {
                let keyA = userAuthToken ? userData.id : new Date(a.created_at);
                let keyB = userAuthToken
                  ? a.listType === 'donation'
                    ? a?.userDetails?._id
                    : a?.orderDetails.userDetails?._id
                  : new Date(b.created_at);
                // Compare the 2 dates
                // console.log(keyA,keyB)
                if (!userAuthToken) {
                  if (keyA < keyB) return 1;
                  if (keyA > keyB) return -1;
                } else {
                  if (keyA === keyB) return -1;
                  if (keyA !== keyB) return 1;
                }

                return 0;
              })
              .slice(0, loadMore ? historyList.length : 6)
              .map((item, i) => {
                let uid =
                  item.listType === 'donation'
                    ? item?.userDetails?._id
                    : item?.orderDetails.userDetails?._id;
                return (
                  <HistoryItem
                    categoryName="Fish"
                    type={item.listType}
                    categoryColor="hsla(0, 96.46%, 76.14%, 1.00)"
                    item={item}
                    active={userAuthToken ? userData.id === uid : false}
                    // active={item.listType === 'donation' ? item?.userDetails?._id : item?.orderDetails.userDetails?._id}
                  />
                );
              })}
          {/* {
            list?.length > 0 &&
            list.slice(0, loadMore ? list.length : 3).
              sort(function (a, b) {
                let keyA = userAuthToken ? userData.id : new Date(a.updated_at)
                let keyB = userAuthToken ? a?.orderDetails.userDetails?._id : new Date(b.updated_at);
                // Compare the 2 dates
                if (!userAuthToken) {
                  if (keyA < keyB) return -1;
                  if (keyA > keyB) return 1;
                } else {
                  if (keyA === keyB) return -1;
                  if (keyA !== keyB) return 1;
                }

                return 0;
              }).
              map((item, i) => {
                return (
                  <HistoryItem categoryName="Fish" type="order" categoryColor="hsla(0, 96.46%, 76.14%, 1.00)" item={item} active={userAuthToken ? userData.id === item?.orderDetails?.userDetails?._id : false} />
                )
              })

          } */}
          {/* <HistoryItem active />
          <HistoryItem
            categoryName="Fish"
            categoryColor="hsla(0, 96.46%, 76.14%, 1.00)"
          />
          <HistoryItem categoryName="Captain" categoryColor="#000" /> */}
        </ul>
        {!loadMore && historyList.length > 3 && (
          <div className="more__log">
            <Button
              variant="info"
              className="fs-6 pt-12p pb-12p w-100"
              onClick={() => setLoadMore(true)}
            >
              Load More . . .
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default History;
