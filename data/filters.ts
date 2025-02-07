import { upperFirst } from "lodash-es"

export const buttonFilters = [
  {
    id: "FStyled" as const,
    index: 1,
    label: "Styled",
    labelZh: "样式化",
    icon: "i-tabler-palette",
    help: "Styled components come with opinated style. You usually customize them by overriding these styles.",
    helpZh: "样式化组件（Styled components）带有固定的样式。通常你可以通过覆盖这些样式来自定义它们。",
  },
  {
    id: "FUnstyled" as const,
    index: 2,
    label: "Unstyled",
    labelZh: "无样式",
    icon: "i-tabler-palette-off",
    help: "Unstyled components come with no style and force you to write your own.",
    helpZh: "无样式组件（Unstyled components）没有任何样式，你需要自己编写样式。",
  },
  {
    id: "FImported" as const,
    index: 3,
    label: "Imported",
    labelZh: "导入",
    icon: "i-mdi-import",
    help: "You depends on an external library from which you import components. You benefits from library updates but can not directly customize components since it's not your own code.",
    helpZh: "你需要安装依赖来导入组件（代码在 node_modules）。可以获得随时更新库的便利，但由于代码不是你自己的，所以无法修改组件代码。",
  },
  {
    id: "FPasted" as const,
    index: 4,
    label: "Pasted",
    labelZh: "拷贝使用",
    icon: "i-mdi-content-paste",
    help: "You depends on no external library and need to copy paste component code into your own project. After pasting the code, it's yours and you can customize it as you want. However, you can't benefit from the updates automatically.",
    helpZh: "不依赖任何外部库（代码不在 node_modules），需要将组件代码复制粘贴到的项目中。粘贴代码后，它就是你的了，你可以随意自定义。但是你无法自动获得更新。",
  },
  {
    id: "FComponents" as const,
    index: 5,
    label: "Components",
    labelZh: "组件",
    icon: "i-icon-park-outline-components",
    help: "Provide components handling both logic and stying (or logic only if unstyled), but it is coupled to the Vue/React framework.",
    helpZh: "提供组件处理逻辑和样式（如果是无样式组件则只处理逻辑），但它与 Vue/React 框架耦合。",
  },
  {
    id: "FCSS" as const,
    index: 6,
    label: "CSS only",
    labelZh: "仅 CSS",
    icon: "i-ph-file-css",
    help: "Only provide CSS classes to inject into your own components. You get no logic, but the library can be used with any framework (not only Vue/React).",
    helpZh: "只提供 CSS 类注入到你自己的组件中。UI 库不提供任何逻辑，但这个库可以与任何框架一起使用。",
  },
  {
    id: "FReact" as const,
    index: 8,
    label: "React",
    labelZh: "React",
    icon: "i-nonicons-react-16",
    help: "Made for React framework",
    helpZh: "React 可使用的组件库",
  },
  {
    id: "FVue" as const,
    index: 7,
    label: "Vue",
    labelZh: "Vue",
    icon: "i-mdi-vuejs",
    help: "Made for Vue framework",
    helpZh: "Vue 可使用的组件库",
  },
  {
    id: "FMiniProgram" as const,
    index: 9,
    label: "Mini Program",
    labelZh: "小程序",
    icon: "i-mingcute-wechat-miniprogram-line",
    help: "Made for Mini Program",
    helpZh: "小程序组件库",
  },
  {
    id: "FMobile" as const,
    index: 10,
    label: "Mobile",
    labelZh: "移动端",
    icon: "i-material-symbols-phone-iphone",
    help: "Mobile-friendly component library support",
    helpZh: "移动端支持友好的组件库",
  },
  {
    id: "FTailwind" as const,
    index: 11,
    label: "Tailwind CSS",
    labelZh: "Tailwind CSS",
    icon: "i-simple-icons-tailwindcss",
    help: "The library uses Tailwind CSS itself and allows you to use it to customize components. As a Tailwind CSS user, this allows to keep a unique tool for all your styling.",
    helpZh: "库使用 Tailwind CSS 编写，且可以使用 Tailwind CSS 自定义组件。",
  },
  {
    id: "FFree" as const,
    index: 12,
    label: "Free",
    labelZh: "免费",
    icon: "i-material-symbols-money-off",
    help: "The UI Library is entirely free for all available components.",
    helpZh: "该 UI 库对于所有组件完全免费。",
  },
  {
    id: "FAccessible" as const,
    index: 13,
    label: "Fully Accessible",
    labelZh: "无障碍设计",
    icon: "i-material-symbols-accessibility-new",
    help: "All components are designed with accessibility in mind.",
    helpZh: "所有组件都考虑了完全无障碍 (Fully Accessible)。",
  },
  {
    id: "FBuiltinThemes" as const,
    index: 14,
    label: "Built-in Themes",
    labelZh: "内置主题",
    icon: "i-solar-palette-outline",
    help: "Provide different themes ready to be used.",
    helpZh: "提供不同的可直接使用的主题。",
  },
  {
    id: "FThemeGenerator" as const,
    index: 15,
    label: "Theme Generator",
    labelZh: "主题生成器",
    icon: "i-fluent-wand-24-regular",
    help: "Provide a tool to help developpers generate new themes in an easy way.",
    helpZh: "提供一个工具，帮助开发者以简单的方式生成新主题。",
  },
  {
    id: "FDarkMode" as const,
    index: 16,
    label: "Dark Mode",
    labelZh: "暗黑模式",
    icon: "i-mdi-weather-night",
    help: "Components are designed tu support both a light and dark version.",
    helpZh: "组件设计支持明亮和暗黑两种版本。",
  },
  {
    id: "FSemanticColors" as const,
    index: 17,
    label: "Semantic Colors",
    labelZh: "语义颜色",
    icon: "i-mingcute-color-filter-line",
    help: "Colors can be associated with particular meanings, like 'primary', 'secondary', etc.",
    helpZh: "颜色与特定的含义相关联，如「primary」、「secondary」等。",
  },
  {
    id: "FFigma" as const,
    index: 18,
    label: "Figma files",
    labelZh: "Figma 文件",
    icon: "i-ph-figma-logo",
    help: "Figma is the leading design tool. Figma files contain the same components that the UI Library, so that designers can create designs without coding skills.",
    helpZh: "Figma 是领先的设计工具。Figma 文件包含与 UI 库相同的组件，即使设计师无需编码技能也可以创建设计。",
  },
  {
    id: "FOfficial" as const,
    index: 19,
    label: "Official",
    labelZh: "官方",
    icon: "i-solar-medal-ribbon-linear",
    help: "Made by a team responsible for managing a framework itself.",
    helpZh: "由负责管理框架本身的团队制作。",
  },
  {
    id: "FRoadmap" as const,
    index: 20,
    label: "Public Roadmap",
    labelZh: "公开路线图",
    icon: "i-tabler-road",
    help: "A public roadmap is available to help you see next library features.",
    helpZh: "提供公开的路线图（Roadmap），帮助你查看库的下一个功能。",
  },
  {
    id: "FRTLSupport" as const,
    index: 21,
    label: "RTL support",
    labelZh: "RTL 支持",
    icon: "i-material-symbols-keyboard-tab-rtl-rounded",
    help: "Ability to display text that is written from right to left (Arabic, Hebrew, etc.)",
    helpZh: "支持从右到左显示文本（阿拉伯语、希伯来语等）。",
  },
  {
    id: "FTyped" as const,
    index: 22,
    label: "Fully Typed",
    labelZh: "完全类型化",
    icon: "i-tabler-brand-typescript",
    help: "Provided components are all typed to help developpers with auto-completion and potential errors.",
    helpZh: "提供的组件都经过类型化，可以帮助开发人员实现自动补全并避免潜在错误。",
  },
  {
    id: "FForm" as const,
    index: 23,
    label: "Form Helpers",
    labelZh: "表单助手",
    icon: "i-material-symbols-dynamic-form-outline",
    help: "Provided tools or examples for integration with form management libraries (Vee-Validate, Zod, Yup, etc.)",
    helpZh: "提供工具或示例，用于与表单管理库（Vee-Validate、Zod、Yup 等）集成。",
  },
]

export const rangeFilters = [
  {
    id: "FNbStars" as const,
    leadingLabel: "More than",
    leadingLabelZh: "超过",
    trailingLabel: "stars",
    trailingLabelZh: "stars",
    icon: "i-mdi-star-outline",
    help: "Remind that Vue-centered/React-centered libraries are supposed to be less stared than general ones",
    helpZh: "以 Vue/React 为中心的库通常比通用库获得的星数少",
    rangeMax: 35000,
    rangeStep: 1000,
  },
  {
    id: "FNbDownloads" as const,
    leadingLabel: "More than",
    leadingLabelZh: "超过",
    trailingLabel: "k npm DLs",
    trailingLabelZh: "千次 npm 下载",
    icon: "i-material-symbols-download",
    help: "NPM Weekly Downloads",
    helpZh: "NPM 包平均每周下载量",
    rangeMax: 500,
    rangeStep: 5,
  },
  {
    id: "FNbComponents" as const,
    leadingLabel: "More than",
    leadingLabelZh: "超过",
    trailingLabel: "components",
    trailingLabelZh: "个组件",
    icon: "i-heroicons-square-3-stack-3d",
    help: "Only counts the number of components provided by the library, does not include utility methods or other tools",
    helpZh: "只计算组件库提供的组件数量，工具方法等不计算",
    rangeMax: 100,
    rangeStep: 5,
  },
]

export const getButtonFilters = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)
  return buttonFilters.map((item) => {
    return {
      id: item.id,
      index: item.index,
      // @ts-ignore
      label: item[`label${_lang}`],
      rawLabel: item.label,
      icon: item.icon,
      // @ts-ignore
      help: item[`help${_lang}`],
    }
  })
}

export const getRangeFilters = (lang: string) => {
  const _lang = lang === "en" ? "" : upperFirst(lang)
  // return lang === "zh" ? buttonFiltersZh : buttonFilters
  return rangeFilters.map((item) => {
    return {
      id: item.id,
      // @ts-ignore
      leadingLabel: item[`leadingLabel${_lang}`],
      // @ts-ignore
      trailingLabel: item[`trailingLabel${_lang}`],
      icon: item.icon,
      // @ts-ignore
      help: item[`help${_lang}`],
      rangeMax: item.rangeMax,
      rangeStep: item.rangeStep,
    }
  })
}