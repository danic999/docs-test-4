import clsx from "clsx";
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import {Redirect} from '@docusaurus/router';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return <Redirect to="/category/blinkid-introduction" />;
}
