import { ExplainationType } from '../types';

const folderStructure = `
\`\`\`
/css
  ├── settings/
  │     ├── _variables.scss
  │     ├── _colors.scss
  │
  ├── tools/
  │     ├── _mixins.scss
  │     ├── _functions.scss
  │
  ├── generic/
  │     ├── _reset.scss
  │     ├── _normalize.scss
  │
  ├── elements/
  │     ├── _headings.scss
  │     ├── _lists.scss
  │
  ├── objects/
  │     ├── _grid.scss
  │     ├── _layout.scss
  │
  ├── components/
  │     ├── _button.scss
  │     ├── _card.scss
  │
  ├── utilities/
        ├── _utilities.scss
\`\`\`
`;

export const explaination: ExplainationType = {
  bem: `**Overview**: BEM, short for **Block-Element-Modifier**, is a methodology created by Yandex for naming classes in a modular and scalable way. It breaks down the interface into independent blocks and introduces a clear convention for naming classes, making it easier to understand relationships between elements.

**Block**: A standalone component that can be reused, like a \`button\` or \`card\`.

**Element**: A part of the block that has no independent meaning and is semantically tied to the block, like \`button__icon\`.

**Modifier**: A variant of the block or element that changes its appearance or behavior, like \`button--primary\`.

With BEM, it's easy to understand the structure and purpose of each class just by looking at the name. This convention promotes reusable components and makes the CSS modular.

**Advantages**:

- Modular and reusable components
- Consistent, predictable naming

**Examples in Open Source**:

- **Bootstrap**: Uses a structured class approach similar to BEM.
- **Bulma**: A CSS framework inspired by BEM, with modular, reusable components.`,
  oocss: `**Overview**: OOCSS, or **Object-Oriented CSS**, was developed by Nicole Sullivan. The idea is to treat elements as “objects” and focus on reusability by separating structure (container) from skin (appearance). This methodology encourages breaking styles down into reusable, modular components, improving both maintainability and performance.

Principles of OOCSS:

1. **Separate Structure and Skin**: Create structure classes that define the layout and skin classes for appearance, making them reusable across different contexts.

2. **Separate Container and Content**: Keep container-specific styles separate so components can be placed anywhere without affecting the layout.`,
  smacss: `**Overview**: SMACSS, created by Jonathan Snook, is a flexible CSS architecture that categorizes styles into five types. Unlike rigid naming conventions, SMACSS is more of a guide for organizing CSS and is especially useful for large-scale applications.

**Categories in SMACSS:**

1. **Base**: Default styles like resets, typography, etc.

2. **Layout**: Styles for the main structure of the page.

3. **Module**: Self-contained components like buttons, cards, or forms.

4. **State**: Styles for interactive states like ___hover___, ___active___, or ___disabled___.

5. **Theme**: Styles for theming purposes, like different color schemes.`,
  itcss: `**Overview**: ITCSS, short for **Inverted Triangle CSS**, organizes CSS in a logical hierarchy, helping manage specificity and scale in large projects. Created by Harry Roberts, ITCSS provides a structured approach to writing and maintaining CSS for complex projects. The methodology focuses on reducing specificity issues, increasing reusability, and improving the scalability of stylesheets.

**Key Principles of ITCSS:**

1. **Inverted Triangle Structure**: ITCSS uses an inverted triangle to represent the specificity and importance of styles. At the top, styles are low in specificity and globally applicable, while at the bottom, styles are high in specificity and more contextual.

2. **Layered Approach**: ITCSS divides styles into distinct layers:
    - **Settings**: Contains global variables, color palettes, and font definitions.
    - **Tools**: Includes mixins, functions, and utility classes that don't output actual CSS unless used.
    - **Generic**: Consists of reset styles, normalize.css, or base styles like \`box-sizing\`.
    - **Elements**: Base styles for HTML elements like headings, paragraphs, lists, etc.
    - **Objects**: Defines reusable design patterns like grids or layouts without relying on specific contexts.
    - **Components**: Specific UI components like buttons, cards, and modals.
    - **Utilities**: Highly specific utility classes for quick overrides or minor tweaks.

3. **Low-Specificity Styles First**: Styles defined at the top of the inverted triangle (like Settings and Tools) have lower specificity. These are foundational and can be overridden by more specific layers below.

4. **Separation of Concerns**: ITCSS encourages separating design concerns into layers. This helps in organizing CSS logically and avoids conflicts caused by tightly coupled styles.

**Benefits of ITCSS:**

- **Scalability**: By organizing CSS in layers, ITCSS scales well for large projects with many components.
- **Maintainability**: Clear separation of concerns makes it easier to understand and update stylesheets.
- **Specificity Management**: ITCSS minimizes specificity wars, ensuring styles are predictable and easy to override when necessary.

**Example of ITCSS Folder Structure:**

${folderStructure}
  `,
  'atomic-design': `**Overview**: Atomic Design is a methodology created by Brad Frost. Its inspired by chemistry, where interfaces are broken down into “atoms” (small, basic building blocks) and progressively combined to form larger structures. This approach is highly component-driven and is particularly well-suited for design systems.

**The Five Levels of Atomic Design:**

1. **Atoms**: Basic building blocks like buttons, labels, or inputs.

2. **Molecules**: Combinations of atoms to form small components, like a form field with a label and input.

3. **Organisms**: Groups of molecules to form a section, like a navbar.

4. **Templates**: Page-level structure that combines organisms to create layouts.

5. **Pages**: Real instances of templates with specific content.`,
};
