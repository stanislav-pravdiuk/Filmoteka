import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import API from './popular/load-popular';
import apiSearchForm from './form_search/load-form';
import { refs } from './refs';
import renderMarkupPopular from './popular/render-markup-popular';
import fetchSerchFormPag from './form_search/render-murkap-form';

const options = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="https://api.themoviedb.org/3/trending/movie/day?page={{page}}" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="https://api.themoviedb.org/3/trending/movie/day?page={{page}}" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="https://api.themoviedb.org/3/trending/movie/day?page={{page}}" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

export function paginationRender(totalItems, page = 1) {
  options.totalItems = totalItems;
  options.page = page;
  let pagination = new Pagination(refs.container, options);

  pagination.on('beforeMove', ({ page }) => {
    renderMarkupPopular.renderPopulars(page);
    window.scrollTo(0, 0);
  });
}
