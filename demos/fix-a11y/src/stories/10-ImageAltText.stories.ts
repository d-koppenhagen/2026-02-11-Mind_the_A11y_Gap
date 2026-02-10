const bookCoverUrl = 'https://angular-buch.com/assets/img/book-cover-v1m.png';
const bookCoverAlt = 'Book Cover: German Angular book with title &quot;Das moderne Praxisbuch zu Angular: Von den Grundlagen bis zur professionellen Entwicklung mit Signals&quot;, written by Ferdinand Malcher, Danny Koppenhagen and Johannes Hoppe';
const saveSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23333' d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'/%3E%3C/svg%3E";

export default {
  title: '10 - Image Alt Text',
  parameters: {
    layout: 'centered',
  },
};

export const Bad_NoAlt = () => /* html */`
  <div class="stacked w-350">
    <img src="${bookCoverUrl}" />
  </div>
`;
Bad_NoAlt.storyName = 'Bad: No Alt Attribute';

export const Bad_DecorativeWithoutAlt = () => /* html */`
  <div class="stacked w-350">
    <button>
      <img src="${saveSvg}" style="width: 20px; height: 20px;" />
      Save
    </button>
  </div>
`;
Bad_DecorativeWithoutAlt.storyName = 'Bad: Decorative Image Without Alt Attribute';

export const Bad_RedundantAlt = () => /* html */`
  <div class="stacked w-350">
    <button>
      <img alt="Save" src="${saveSvg}" style="width: 20px; height: 20px;" />
      Save
    </button>
  </div>
`;
Bad_RedundantAlt.storyName = 'Bad: Decorative Image With Redundant Alt Text';

export const Good_AltAttribute = () => /* html */`
  <div class="stacked w-350">
    <img alt="${bookCoverAlt}" src="${bookCoverUrl}" />
  </div>
`;
Good_AltAttribute.storyName = 'Good: Alt Attribute';

export const Good_EmptyAlt = () => /* html */`
  <div class="stacked w-350">
    <button>
      <img alt="" src="${saveSvg}" style="width: 20px; height: 20px;" />
      Save
    </button>
  </div>
`;
Good_EmptyAlt.storyName = 'Good: Decorative Image With Empty Alt Attribute';

export const Good_AriaDescribedBy = () => /* html */`
  <div class="row" lang"en">
    <img class="w-350" alt="Book Cover" aria-describedby="book-description" src="${bookCoverUrl}" />
    <div id="book-description">
      <hgroup lang="de">
        <h1>Das moderne Praxisbuch zu Angular</h1>
        <p>Von den Grundlagen bis zur professionellen Entwicklung mit Signals</p>
      </hgroup>
      <h2>Authors</h2>
      <ul>
        <li>Ferdinand Malcher</li>
        <li>Danny Koppenhagen</li>
        <li>Johannes Hoppe</li>
      </ul>
    </div>
  </div>
`;
Good_AriaDescribedBy.storyName = 'Good: Empty Alt With Linked ARIA Description';
