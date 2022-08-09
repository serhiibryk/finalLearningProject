import React, { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { Card } from "antd";

import { localStoreService } from "../../utils";
import Spiner from "../../components/spiner";

import useStyles from "./style";

const token = localStoreService.get("user");

const Profile = () => {
  const [decoded, setDecoded] = useState<DecodedData | null>(null);

  const classes = useStyles();
  const decodedData = useJwt(token.token);

  const returnToken = () => {
    return token.token;
  };

  useEffect(() => {
    setDecoded(decodedData.decodedToken as DecodedData);
  }, [decodedData]);

  if (decoded === null) {
    return <Spiner classes={classes.spiner} />;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card} hoverable>
        <p>Token:</p>
        <p className={classes.textP}>{returnToken()}</p>
        <p>Decode:</p>
        <ul>
          <li>{decoded?.firstName}</li>
          <li>{decoded?.lastName}</li>
          <li>{decoded?.nickname}</li>
          <li>{decoded?.phone}</li>
          <li>{decoded?.address}</li>
          <li>{decoded?.email}</li>
          <li>{decoded?.aud}</li>
          <li>{decoded?.iss}</li>
          <li>{decoded?.exp}</li>
          <li>{decoded?.iat}</li>
          <li>{decoded?.sub}</li>
        </ul>
      </Card>
    </div>
  );
};

export default Profile;
