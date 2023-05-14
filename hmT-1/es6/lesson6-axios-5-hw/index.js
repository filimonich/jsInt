import * as ArticlesModel from './articles';
import 'babel-polyfill';

async function testArticlesModel() {
  let articles = await ArticlesModel.all();
  console.log('articles count = ' + articles.length);

  // берём случайный индекс
  let ind = Math.floor(Math.random() * articles.length);
  console.log('select index ' + ind + ', id = ' + articles[ind].id);

  // получаем статью по id
  let article = await ArticlesModel.one(articles[ind].id);
  console.log(article);

  let removeRes = await ArticlesModel.remove(article.id);
  console.log('что с удалением? - ' + removeRes);

  let articlesNewList = await ArticlesModel.all();
  console.log('articles count = ' + articlesNewList.length);

  let addFail = await ArticlesModel.add({
    title: '',
    content: article.content,
  });
  console.log('добавили статью - ', addFail);

  let addRes = await ArticlesModel.add({
    title: article.title + ' + re add',
    content: article.content + ' + add',
  });
  console.log('добавили статью - ', addRes);

  let articlesNewestList = await ArticlesModel.all();
  console.log('articles count = ' + articlesNewestList.length);

  // берём случайный индекс
  let indNew = Math.floor(Math.random() * articlesNewestList.length);
  let newArticle = articlesNewestList[indNew];
  console.log('select index ' + indNew + ', id = ' + newArticle.id);

  let editBad = await ArticlesModel.edit(0, {
    title: article.title,
    content: article.content + ' + edit',
  });

  console.log('что с редактированием?', editBad);

  let editInvalid = await ArticlesModel.edit(newArticle.id, {
    title: '',
    content: article.content + ' + edit',
  });

  console.log('что с редактированием', editInvalid);

  let editRes = await ArticlesModel.edit(newArticle.id, {
    title: article.title,
    content: article.content + ' + edit',
  });

  console.log('что с редактированием', editRes);
}

testArticlesModel()
  .then(() => {})
  .catch(e => {
    console.log(e.stack);
  });
