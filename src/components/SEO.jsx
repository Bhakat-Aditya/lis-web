import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({
  title = "LabExpert | Cloud Pathology & Smart OPD Software",
  description = "Complete cloud Laboratory Information System (LIS) and Smart OPD software. Fast patient registration, formula calculation engine, barcode specimen tracking, instant WhatsApp delivery, and doctor commissions.",
  keywords = "Laboratory Information System, LIS Software, Pathology Software, Cloud Lab Software, Diagnostic Software, WhatsApp Lab Reports, OPD Management, Clinic Software, India LIS",
  canonical = "https://labexpert.in"
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}

