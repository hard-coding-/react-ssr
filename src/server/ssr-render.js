import DefaultTemplate from './default-html';

export default (ctx, app) => {
	return DefaultTemplate({
		title:'titleOfDefaultHtml',
		body: app
	});
}