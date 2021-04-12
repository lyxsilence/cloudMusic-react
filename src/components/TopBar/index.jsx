import React, { useCallback, useEffect } from "react";
import MinAndMax from "../MinAndMax";
import { withRouter, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import style from "./style.css";
import { twoLevelRouteChange } from "@/redux/actions";

const DiscoverItem = ({ item }) => {
  return (
    <div className='item'>
      <div
        className={ item.isOn ? 'isOn disItem_text' : "disItem_text"}
      >
        {item.name}
      </div>
    </div>
  );
};

function TopRedBorder({
  bgc = "#C20C0C",
  discoverLists = [],
  history,
  routeChange,
}) {
  console.log(discoverLists, "routeChange");
  const { listen } = useHistory();

  useEffect(() => {
    if (discoverLists.length) {
      listen((location) => {
        console.log(location, 'location')
        let pathname = location.pathname;
        let item = discoverLists.find((item) => pathname === item.path);
        if (!item) {
          item = { path: "/", id: 1 };
        }  
        routeChange(item.id);
      });
    }
  }, [discoverLists,routeChange,listen])

  const gotoLink = useCallback((item) => {
    console.log(item, "item");
    history.push(item.path);
    routeChange(item.id);
  }, [history,routeChange]);

  if (!discoverLists.length) {
    return (
      <MinAndMax bgc={bgc}>
        <div className={style.disHeader} style={{ height: "6px" }}></div>
      </MinAndMax>
    );
  }
  return (
    <MinAndMax bgc={bgc} isContainer={false}>
      <div className={style.disHeader}>
        {discoverLists
          ? discoverLists.map((item) => (
              <div onClick={() => gotoLink(item)} key={item.id}>
                <DiscoverItem
                  item={item}
                />
              </div>
            ))
          : null}
      </div>
    </MinAndMax>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    routeChange: (id) => {
      dispatch(twoLevelRouteChange(id));
    },
  };
};
export default connect(() => {
  return {};
}, mapDispatchToProps)(withRouter(TopRedBorder));