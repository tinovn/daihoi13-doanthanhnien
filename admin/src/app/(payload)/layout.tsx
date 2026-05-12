/* Payload-managed group layout */
import config from '@payload-config';
import '@payloadcms/next/css';
import { RootLayout } from '@payloadcms/next/layouts';
import React from 'react';
import { importMap } from './importMap';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout config={config} importMap={importMap}>{children}</RootLayout>
);

export default Layout;
