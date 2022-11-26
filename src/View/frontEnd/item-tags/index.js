import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import ListItemImg from '../Component/atoms/list-item-img';
import DefaultLayout from '../Component/templates/default-layout';

import './style.scss';

const ItemTags = () => {
  return (
    <DefaultLayout>
      <div className="password-reset position-relative">
        <Container fluid className="position-relative pb-5 pt-5">
          <div className="mw-600">
            <h1 className="text-dark fw-bolder mb-6p pt-2">Post Tags</h1>
            <div className="fs-5 fw-semibold text-light pb-5 mb-3 mw-600">
              Every item posted by the Organization is marked with symbols representing the item's
              eligibility for tax receipts, whether the item has already been purchased and your
              donation is helping pick up the tab, or if the item is related to a project.
            </div>

            <ul className="list-unstyled mb-0 mb-sm-5">
              <li className="d-flex align-items-center py-3">
                <ListItemImg
                  size={84}
                  className="flex-shrink-0"
                  icon={
                    <FontAwesomeIcon
                      icon={solid('calculator')}
                      className="fs-2 text-info p-3"
                    />
                  }
                />
                <div className="ms-3">
                  <div className="fs-4 fw-bolder text-dark">Tax Receipt Eligible</div>
                  <div className="text-light fs-5 lh-1.5">
                    Items marked with the calculator symbol are eligible to receive a tax receipt.
                    If you are interested in tax deductible giving, look for the items marked with
                    the calculator icon.
                  </div>
                </div>
              </li>

              <li className="d-flex align-items-center py-3">
                <ListItemImg
                  size={84}
                  className="flex-shrink-0"
                  icon={
                    <FontAwesomeIcon
                      icon={solid('tag')}
                      color="rgb(148, 122, 218)"
                      className="fs-2 p-3"
                    />
                  }
                />
                <div className="ms-3">
                  <div className="fs-4 fw-bolder text-dark">Tab Item</div>
                  <div className="text-light fs-5 lh-1.5">
                    These are items that the organization has already purchased. By donating to Tab
                    items, you are essentially helping the organization recouperate the costs of
                    their purchase.
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center py-3">
                <ListItemImg
                  size={84}
                  className="flex-shrink-0"
                  icon={<FontAwesomeIcon icon={solid('bolt')} className="fs-2 text-success p-3" />}
                />
                <div className="ms-3">
                  <div className="fs-4 fw-bolder text-dark">Project Item</div>
                  <div className="text-light fs-5 lh-1.5">
                    Items marked with a lightening bolt belong to a group of items the organization
                    has created such as a christmas drive. Projects are great for donating to
                    specific causes or events.
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center py-3">
                <ListItemImg
                  size={84}
                  className="flex-shrink-0"
                  icon={
                    <FontAwesomeIcon
                      icon={solid('infinity')}
                      color="#756fe4"
                      className="fs-2 p-3"
                    />
                  }
                />
                <div className="ms-3">
                  <div className="fs-4 fw-bolder text-dark">Unlimited Quantity</div>
                  <div className="text-light fs-5 lh-1.5">
                    Items without a set quantity are marked with the infinity symbol and represent
                    an ongoing need of the organization. Products like hot dogs for weekend BBQ's or
                    Cans of Soup for a soup kitchen; items that are always needed for ongoing
                    events.
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </DefaultLayout>
  );
};

export default ItemTags;
