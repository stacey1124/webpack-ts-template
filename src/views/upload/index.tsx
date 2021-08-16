import React, { useState } from "react";
import Upload from "antd/lib/upload";
import Modal from "antd/lib/modal";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import Ajax from "../../utils/Ajax.js";
import "antd/dist/antd.css";

export const UploadImage = () => {
  const [loading, setLoading] = useState(false);
  const data: {
    previewVisible: boolean;
    previewImage: string;
    previewTitle: string;
    fileList: any;
  } = {
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList: [
      {
        uid: "-1",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-2",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-3",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-4",
        name: "image.png",
        status: "done",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-xxx",
        percent: 50,
        name: "image.png",
        status: "uploading",
        url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      },
      {
        uid: "-5",
        name: "image.png",
        status: "error",
      },
    ],
  };
  //使用axios请求

  const handlePreview = () => {};
  const handleChange = () => {
    setLoading(true);
  };
  const handleCancel = () => {};
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const customRequest = (option: any) => {
    const formData = new FormData();
    console.log("_before", formData);
    formData.append("file[]", option.file);
    console.log("_after", formData);

    console.log("option", option);
  };

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        customRequest={customRequest}
        listType="picture-card"
        showUploadList={false}
        fileList={data.fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {data.fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={data.previewVisible}
        title={data.previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={data.previewImage} />
      </Modal>
    </>
  );
};
