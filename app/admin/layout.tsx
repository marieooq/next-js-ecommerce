import React from "react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Nav></Nav>
      <div className="container my-6"></div>
    </>
  );
};

export default AdminLayout;
