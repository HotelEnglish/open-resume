import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
   profile: {
    name: "约翰·杜伊",
    summary:
      "痴迷于构建卓越产品、深受人们喜爱的软件工程师",
    email: "hello@openresume.com",
    phone: "123-456-7890",
    location: "纽约州 纽约市",
    url: "linkedin.com/in/john-doe",
  },
  workExperiences: [
    {
      company: "ABC公司",
      jobTitle: "软件工程师",
      date: "2023年5月 - 至今",
      descriptions: [
        "带领一个由5名工程师组成的跨职能团队开发搜索栏，使数千名日活跃用户能够在整个平台上搜索内容",
        "创建吸引人的主页产品演示动画，从而提高注册率20%",
        "编写模块化且易于维护的干净代码，同时确保100%的测试覆盖率",
      ],
    },
    {
      company: "DEF组织",
      jobTitle: "软件工程师实习生",
      date: "2022年夏季",
      descriptions: [
        "重新架构现有的内容编辑器以实现手机响应式设计，导致移动用户参与度提高10%",
        "创建进度条帮助用户跟踪进度，从而提高了用户留存率15%",
        "发现并修复现有代码库中的5个bug，以提升用户体验",
      ],
    },
    {
      company: "XYZ大学",
      jobTitle: "研究助理",
      date: "2021年夏季",
      descriptions: [
        "设计了一种新的文本分类NLP算法，使准确率提高10%",
        "向20多名教职员工和学生汇编并展示研究成果",
      ],
    },
  ],
  educations: [
    {
      school: "XYZ大学",
      degree: "计算机科学理学学士",
      date: "2019年9月 - 2023年5月",
      gpa: "3.8",
      descriptions: [
        "在2022年教育黑客马拉松中荣获第一名，在2023年健康科技竞赛中获得第二名",
        "担任《网页编程》（2022年至2023年）课程的教学助理",
        "课程学习：面向对象编程（A+）、网页编程（A+）、云计算（A）、机器学习入门（A-）、算法分析（A-）",
      ],
    },
  ],
  projects: [
    {
      project: "OpenResume",
      date: "2023年春季",
      descriptions: [
        "创建并推出一款免费简历生成器Web应用，帮助数以千计的用户轻松制作专业简历，并找到理想的工作",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "Python", rating: 3 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 2 },
    ],
    descriptions: [
      "技术栈：React Hooks、GraphQL、Node.js、SQL、Postgres、NoSql、Redis、REST API、Git",
      "软技能：团队合作、创造性问题解决、沟通能力、学习心态、敏捷开发",
    ],
  }, 
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
