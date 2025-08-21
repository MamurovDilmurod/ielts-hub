import React, { useState, useEffect } from "react";
import { Table, Input, Button, Tooltip, Modal, Form } from "antd";
import { EditTwoTone, DeleteTwoTone, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Vocabulary = () => {
  const [data, setData] = useState<
    { key: string; english: string; uzbek: string }[]
  >([]);

  const [bulkText, setBulkText] = useState(""); // ko‘p so‘z qo‘shish uchun

  const [editingWord, setEditingWord] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // ✅ Qo‘shish modal

  // ✅ LocalStorage-dan o‘qish
  useEffect(() => {
    const saved = localStorage.getItem("vocabulary");
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch {
        setData([]);
      }
    }
  }, []);

  // ✅ LocalStorage-ga yozish
  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("vocabulary", JSON.stringify(data));
    }
  }, [data]);

  // ❌ Delete qilish
  const deleteWord = (key: string) => {
    setData((prev) => prev.filter((item) => item.key !== key));
  };

  // ✏️ Edit qilish
  const editWord = (record: any) => {
    setEditingWord(record);
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (!editingWord.english.trim() || !editingWord.uzbek.trim()) return;

    setData((prev) =>
      prev.map((item) => (item.key === editingWord.key ? editingWord : item))
    );
    setIsModalOpen(false);
    setEditingWord(null);
  };

  // ✅ Ko‘p so‘zlarni birvarakayiga qo‘shish
  const addBulkWords = () => {
    if (!bulkText.trim()) return;

    const lines = bulkText.split("\n");
    const newWords = lines
      .map((line) => {
        const [english, uzbek] = line.split("-").map((w) => w?.trim());
        if (english && uzbek) {
          return {
            key: Date.now().toString() + Math.random(),
            english,
            uzbek,
          };
        }
        return null;
      })
      .filter(Boolean) as { key: string; english: string; uzbek: string }[];

    setData((prev) => [...prev, ...newWords]);
    setBulkText("");
    setIsAddModalOpen(false); // ✅ Modal yopiladi
  };

  const columns = [
    {
      title: "№",
      key: "index",
      render: (_: any, __: any, index: number) => <span>{index + 1}</span>,
      width: 50,
    },
    {
      title: "English",
      dataIndex: "english",
      key: "english",
      render: (text: string) => (
        <span className="font-semibold text-blue-600">{text}</span>
      ),
    },
    {
      title: "O‘zbekcha",
      dataIndex: "uzbek",
      key: "uzbek",
      render: (text: string) => <span className="text-green-600">{text}</span>,
    },
    {
      title: "Amallar",
      key: "actions",
      render: (_: any, record: any) => (
        <div className="flex items-center gap-5">
          <Tooltip title="Tahrirlash">
            <Button
              icon={<EditTwoTone twoToneColor="#1890ff" />}
              onClick={() => editWord(record)}
            />
          </Tooltip>
          <Tooltip title="O‘chirish">
            <Button
              shape="circle"
              icon={<DeleteTwoTone twoToneColor="#ff4d4f" />}
              onClick={() => deleteWord(record.key)}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Vocabulary</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Words
        </Button>
      </div>

      <Table
        rowKey="key"
        columns={columns}
        dataSource={data}
        bordered
        pagination={{ pageSize: 10 }}
        className="rounded-lg shadow-lg"
      />

      {/* Edit modal */}
      <Modal
        title="So‘zni tahrirlash"
        open={isModalOpen}
        onOk={handleSaveEdit}
        onCancel={() => setIsModalOpen(false)}
        okText="Saqlash"
        cancelText="Bekor qilish"
      >
        <Form layout="vertical">
          <Form.Item label="English">
            <Input
              value={editingWord?.english}
              onChange={(e) =>
                setEditingWord({ ...editingWord, english: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="O‘zbekcha">
            <Input
              value={editingWord?.uzbek}
              onChange={(e) =>
                setEditingWord({ ...editingWord, uzbek: e.target.value })
              }
            />
          </Form.Item>
        </Form>
      </Modal>

      {/* ✅ Add Words Modal */}
      <Modal
        title="Yangi so‘zlar qo‘shish"
        open={isAddModalOpen}
        onOk={addBulkWords}
        onCancel={() => setIsAddModalOpen(false)}
        okText="Qo‘shish"
        cancelText="Bekor qilish"
        width={600}
      >
        <TextArea
          rows={8}
          placeholder={`Har bir qatorni "English - Uzbek" formatida yozing\nMasalan:\nHello - Salom\nBook - Kitob`}
          value={bulkText}
          onChange={(e) => setBulkText(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Vocabulary;
