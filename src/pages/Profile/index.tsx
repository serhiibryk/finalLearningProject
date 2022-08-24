import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { Card, Skeleton } from "antd";
import moment from "moment";

import { localStoreService } from "../../utils";

import useStyles from "./style";

const token = localStoreService.get("user");

const Profile = () => {
  const [decoded, setDecoded] = useState<DecodedData | null>(null);

  const classes = useStyles();
  const decodedData = useJwt(token);

  const returnToken = () => {
    return token;
  };

  useEffect(() => {
    setTimeout(() => {
      setDecoded(decodedData.decodedToken as DecodedData);
    }, 1000);
  }, [decodedData]);

  return (
    <div className={classes.root}>
      <Card className={classes.card} hoverable>
        {decoded ? (
          <div>
            <p>Token:</p>
            <p className={classes.textP}>{returnToken()}</p>
            <p>Decode:</p>
            <ul>
              <li>{decoded.firstName}</li>
              <li>{decoded.lastName}</li>
              <li>{decoded.nickname}</li>
              <li>{decoded.phone}</li>
              <li>{decoded.address}</li>
              <li>{decoded.email}</li>
              <li>{decoded.aud}</li>
              <li>{decoded.iss}</li>
              <li>{decoded.exp}</li>
              <li>{decoded.iat}</li>
              <li>{decoded.sub}</li>
            </ul>
            <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
          </div>
        ) : (
          <Skeleton active />
        )}
      </Card>
    </div>
  );
};

export default Profile;
