import { test, expect } from '@playwright/test';

// 自動で実行されるブラウザ上でのテストを目でも確認するために0.5秒ほど毎回待機する
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

test('search page', async ({ page }) => {
  await page.goto('/');
  await wait(500);

  // 検索バーが存在する
  const searchInput = page.getByPlaceholder('キーワードを入力');
  await expect(searchInput).toBeVisible();
  await wait(500);

  // 検索ボタンが存在する
  const searchButton = page.getByRole('button', { name: '検索' });
  await expect(searchButton).toBeVisible();
  await wait(500);

  // 検索バーの下の初期メッセージが表示されている
  await expect(page.getByText('検索してください')).toBeVisible();
  await wait(500);

  // 検索を実行する
  await searchInput.fill('playwright');
  await wait(500);
  await searchButton.click();

  // 記事の読み込みメッセージが消えるのを待つ
  await page.waitForSelector('text=記事を読み込み中...', { state: 'hidden' });
  await wait(500);

  // 検索結果が表示されるまで待つ
  await page.waitForSelector('text=記事を読む');
  await wait(500);

  // 少なくとも1つのリンクが表示されている
  const articleLinks = page.getByText('記事を読む');
  const count = await articleLinks.count();
  expect(count).toBeGreaterThan(0);
  await wait(500);

  // 最初の "記事を読む" リンクが表示されている
  await expect(articleLinks.first()).toBeVisible();
  await wait(500);

  // 最初の記事リンクをクリックし、新しいページが開く
  const popupPromise = page.waitForEvent('popup');
  await articleLinks.first().click();
  const newPage = await popupPromise;

  // 新しいページのURLがQiitaまたはZennのドメインを含むことを確認
  const newPageUrl = newPage.url();
  expect(newPageUrl).toMatch(/qiita\.com|zenn\.dev/);
  await wait(2000);
});