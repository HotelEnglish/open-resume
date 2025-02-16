import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="姓名"
          labelClassName="col-span-full"
          name="name"
          placeholder="萨尔·汗"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="求职意向"
          labelClassName="col-span-full"
          name="summary"
          placeholder="企业家和教育家，痴迷于为任何人提供免费教育"
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="miro@begs.cn"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="电话"
          labelClassName="col-span-2"
          name="phone"
          placeholder="(123)456-7890"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="个人主页"
          labelClassName="col-span-4"
          name="url"
          placeholder="https://begs.cn"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="籍贯"
          labelClassName="col-span-2"
          name="location"
          placeholder="海南 三亚"
          value={location}
          onChange={handleProfileChange}
        />
      </div>
    </BaseForm>
  );
};
