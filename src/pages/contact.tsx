import type { NextPage } from 'next';
import { TextInput, Textarea, Button } from '@mantine/core';
import { Layout } from '../layout';


const Contact: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          <h2 className="mb-5 text-[26px] font-bold">Contact</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <form>
            <TextInput
              label="Email"
              placeholder="test@test.com"
              className="mb-6"
            />
            <TextInput
              label="Subject"
              placeholder="contact subject"
              className="mb-6"
            />
            <TextInput
              label="Name"
              placeholder="Taro Yamada"
              className="mb-6"
            />
            <Textarea
              label="Your message"
              placeholder="I want to order your goods"
              className="mb-6"
            />

            <Button
              type="submit"
              color="dark"
              radius="xl"
              className="mx-auto block h-[45px] w-[154px]"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;