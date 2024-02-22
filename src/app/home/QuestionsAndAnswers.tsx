import { Link } from "components/documentation";

const QAS = [
  {
    question: "Q1. 什么是简历生成器？为什么简历生成器比简历模板文档更好用？",
    answer: (
      <>
        <p>
          当今创建简历有两种方式。一种是使用简历模板，如Office/Google文档，然后根据自身需求进行定制。另一种则是使用在线简历生成器，允许你输入信息并自动为你生成一份简历。
        </p>
        <p>
          使用简历模板需要手动调整格式，例如复制粘贴文本部分和调整间距，这可能会非常耗时且容易出错。在复制粘贴后很容易出现格式问题，比如使用不同的项目符号或字体样式。相反，像OpenResume这样的简历生成器可以节省时间并防止格式错误，因为它会自动格式化简历。此外，它还提供了方便的更改字体类型或大小的功能，只需轻轻一点即可。总之，与简历模板相比，简历生成器更容易使用。
        </p>
      </>
    ),
  },
  {
    question: "Q2. OpenResume与其他简历生成器和模板相比，有哪些独特之处？",
    answer: (
      <>
        <p>
          除了OpenResume之外，市面上也有一些优秀的免费简历生成器，例如<Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>。然而，OpenResume凭借两个独特的特点脱颖而出：
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. OpenResume专为美国就业市场及最佳实践设计。
          </span>
          <br />
          不同于其他面向全球用户、提供众多自定义选项的简历生成器，OpenResume有意只提供符合美国最佳实践的选项。例如，为了避免偏见和歧视，它不提供添加个人头像的选项。它仅提供核心部分，如个人信息、工作经验、教育背景和技能，而不包括诸如推荐人等不必要的部分。另外，OpenResume只提供自上而下的单栏式简历设计，而非两栏设计，因为单栏设计最适合ATS解析。 <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. OpenResume极度注重隐私保护。
          </span>{" "}
          <br />
          其他简历生成器可能要求邮箱注册并将用户数据存储在他们的数据库中，但OpenResume认为简历数据应保持私密，仅限用户本地设备访问。因此，OpenResume无需注册即可使用该应用，所有输入的数据都存储在用户的浏览器中，只有用户自己能够访问。
        </p>
      </>
    ),
  },
  {
    question: "Q3. OpenResume是谁创建的？又是出于什么原因创建的？",
    answer: (
      <p>
        OpenResume由<Link href="https://github.com/xitanggg">赵希堂</Link>开发，并由<Link href="https://www.linkedin.com/in/imzhi">文志刚</Link>设计，作为周末项目诞生。作为赴美的移民，我们在创建自己的第一份简历以及申请实习和工作时犯过许多错误。我们花了很长时间学习一些最佳实践。在指导第一代学生并审查他们的简历时，我们发现学生们正在犯我们以前同样的错误。这让我们思考如何利用所学知识和技能去帮助他们。于是，我们在周末开始交流和合作，最终形成了OpenResume，在其中融入了最佳实践和我们的知识。我们希望OpenResume可以帮助任何人轻松创建遵循最佳实践的现代专业简历，使任何人都能自信地申请工作。
      </p>
    ),
  },
  {
    question: "Q4. 如何支持OpenResume？",
    answer: (
      <>
        <p>
          支持OpenResume的最佳方式是向我们分享你的想法和反馈，帮助我们进一步改进产品。你可以通过邮件联系我们：<Link href="mailto:hello@open-resume.com">hello@open-resume.com</Link>，或者在我们的Github仓库中<Link href="https://github.com/xitanggg/open-resume/issues/new">
            创建一个新的问题
          </Link>。无论你喜欢还是不喜欢，我们都渴望听到你的声音。
        </p>
        <p>
          另一个支持OpenResume的好方法是口耳相传。将它分享给你的朋友、社交媒体平台，或者告诉你们学校的就业服务中心。我们的目标是让更多的简历制作有困难的人了解这个工具，所以你的口碑支持将非常宝贵。如果你使用Github，还可以通过<Link href="https://github.com/xitanggg/open-resume">
            给该项目点赞（star）
          </Link>来展示你的支持，这有助于提高项目的知名度和影响力。
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
