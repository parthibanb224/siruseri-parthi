import Joi from "joi";
import axios from "axios";
import handler from "../../lib/handler";
import config from "../../lib/config";
import { LpLead } from "../../../models/lplead";

export default handler({ checkAuthenticated: true }).post(async (req, res) => {
  req.validate(
    req.body,
    Joi.object({
      userName: Joi.string(),
      email: Joi.string(),
      phoneNo: Joi.string(),
      source: Joi.string(),
      utmParams: Joi.object({
        source: Joi.string(),
        subSource: Joi.string(),
        medium: Joi.string(),
        campaign: Joi.string(),
        content: Joi.string(),
        ad: Joi.string(),
        adGroup: Joi.string(),
        keyword: Joi.string(),
        device: Joi.string(),
        location: Joi.string(),
      }),
    })
  );

  const {
    userName,
    email,
    phoneNo,
    utmParams: {
      source,
      medium,
      campaign,
      content,
      subSource,
      adGroup,
      keyword,
      device,
      location,
    },
  } = req.body;
  console.log(adGroup);

  try {
    await new LpLead({
      FirstName: userName,
      EmailAddress: email,
      Phone: phoneNo,
      Source: source,
      SourceMedium: medium,
      SourceCampaign: campaign,
      SourceContent: content,
    }).save();
  } catch (err) {
    console.log("Error saving to db");
  }

  const { lsqConfig } = config;
  const postBody = [
    {
      Attribute: "FirstName",
      Value: userName,
    },
    {
      Attribute: "EmailAddress",
      Value: email,
    },
    {
      Attribute: "Phone",
      Value: phoneNo,
    },
    {
      Attribute: "Source",
      Value: source,
    },
    ...(adGroup
      ? [
          {
            Attribute: "mx_Ad_Group",
            Value: adGroup,
          },
        ]
      : []),
    ...(keyword
      ? [
          {
            Attribute: "mx_Term_Value",
            Value: keyword,
          },
        ]
      : []),
    ...(device
      ? [
          {
            Attribute: "mx_Device_Name",
            Value: device,
          },
        ]
      : []),
    ...(location
      ? [
          {
            Attribute: "mx_Location",
            Value: location,
          },
        ]
      : []),
    ...(subSource
      ? [
          {
            Attribute: "mx_First_Sub_Source",
            Value: subSource,
          },
        ]
      : []),
    ...(campaign
      ? [
          {
            Attribute: "SourceCampaign",
            Value: campaign,
          },
        ]
      : []),

    ...(medium
      ? [
          {
            Attribute: "SourceMedium",
            Value: medium,
          },
        ]
      : []),

    ...(content
      ? [
          {
            Attribute: "SourceContent",
            Value: content,
          },
        ]
      : []),
  ];
  console.log(postBody);
  const promise = axios.post(lsqConfig.apiUrl, postBody, {
    params: {
      accessKey: lsqConfig.accessKey,
      secretKey: lsqConfig.secretKey,
    },
  });

  res.sendPromise(promise);
});
