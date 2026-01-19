export default {
  title: '10 - Image Alt Text',
  parameters: {
    layout: 'centered',
  },
};

export const Bad = () => /* html */`
  <div class="stacked w-350">
    <div>
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect fill='%23f5f5f5' width='240' height='140'/%3E%3Ctext x='120' y='15' text-anchor='middle' font-size='12' font-weight='bold'%3EQuarterly Sales%3C/text%3E%3Crect x='30' y='90' width='30' height='30' fill='%234CAF50'/%3E%3Crect x='70' y='70' width='30' height='50' fill='%234CAF50'/%3E%3Crect x='110' y='60' width='30' height='60' fill='%234CAF50'/%3E%3Crect x='150' y='40' width='30' height='80' fill='%234CAF50'/%3E%3Ctext x='45' y='135' text-anchor='middle' font-size='10'%3EQ1%3C/text%3E%3Ctext x='85' y='135' text-anchor='middle' font-size='10'%3EQ2%3C/text%3E%3Ctext x='125' y='135' text-anchor='middle' font-size='10'%3EQ3%3C/text%3E%3Ctext x='165' y='135' text-anchor='middle' font-size='10'%3EQ4%3C/text%3E%3Cline x1='20' y1='120' x2='190' y2='120' stroke='%23999' stroke-width='1'/%3E%3C/svg%3E" style="width: 240px; height: 140px;" />
      <p style="margin: 0.5rem 0 0 0;">Informative image without alt text</p>
    </div>

    <div>
      <button>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23333' d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'/%3E%3C/svg%3E" alt="Save" style="width: 20px; height: 20px;" />
        Save
      </button>
      <p style="margin: 0.5rem 0 0 0;">Decorative image with redundant text</p>
    </div>
  </div>
`;

export const Good = () => /* html */`
  <div class="stacked w-350">
    <div>
      <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect fill='%23f5f5f5' width='240' height='140'/%3E%3Ctext x='120' y='15' text-anchor='middle' font-size='12' font-weight='bold'%3EQuarterly Sales%3C/text%3E%3Crect x='30' y='90' width='30' height='30' fill='%234CAF50'/%3E%3Crect x='70' y='70' width='30' height='50' fill='%234CAF50'/%3E%3Crect x='110' y='60' width='30' height='60' fill='%234CAF50'/%3E%3Crect x='150' y='40' width='30' height='80' fill='%234CAF50'/%3E%3Ctext x='45' y='135' text-anchor='middle' font-size='10'%3EQ1%3C/text%3E%3Ctext x='85' y='135' text-anchor='middle' font-size='10'%3EQ2%3C/text%3E%3Ctext x='125' y='135' text-anchor='middle' font-size='10'%3EQ3%3C/text%3E%3Ctext x='165' y='135' text-anchor='middle' font-size='10'%3EQ4%3C/text%3E%3Cline x1='20' y1='120' x2='190' y2='120' stroke='%23999' stroke-width='1'/%3E%3C/svg%3E" alt="Sales increased 25% in Q4" style="width: 240px; height: 140px;" />
      <p style="margin: 0.5rem 0 0 0;">Informative image with descriptive alt text</p>
    </div>

    <div>
      <button>
        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill='%23333' d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z'/%3E%3C/svg%3E" alt="" style="width: 20px; height: 20px;" />
        Save
      </button>
      <p style="margin: 0.5rem 0 0 0;">Decorative image with empty alt text</p>
    </div>
  </div>
`;
