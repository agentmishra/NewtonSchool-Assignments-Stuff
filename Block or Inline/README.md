Question 1
Block or Inline?
We have to identify whether the following elements are block or inline. To identify that, please render each element twice inside a
block. Make sure that you give the div the right data-ns-test attribute value as mentioned in the list below. The div block will look something like this-
    <div data- ns- attribute="block- inline- button"></div>

After rendering the elements twice, also mention whether the element is Inline or Block in the format-
Answer: Inline
or
Answer: Block
based on whether the elements come in the same row or different.

Sample solution for button element:

<div data-ns-test="block-inline-button">
    <button>Test1</button>
    <button>Test2</button>
    Answer: Inline
</div>

Following are the data-ns-test attribute value required for each of the elements:

- button→ block-inline-button
- div→ block-inline-div
- span→ block-inline-span
- p→ block-inline-p
- input→ block-inline-input
- cite→ block-inline-cite
- code→ block-inline-cite
- p→ block-inline-p
- h1→ block-inline-h1
- sup→ block-inline-sup
- sub→ block-inline-sub

Render divs for other elements one after the other. The order does not matter. The content inside the elements matter. The first element should have Test1 and the second element should have Test2 in the content.

Also read about data-* attributes :)
