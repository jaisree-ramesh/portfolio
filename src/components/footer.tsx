import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Icon
        icon="ant-design:copyright-circle-outlined"
        color="white"
        width="17"
        inline={true}
      />
      Copyright 2022 - Jaisree Ramesh
    </div>
  );
}

export default Footer;
