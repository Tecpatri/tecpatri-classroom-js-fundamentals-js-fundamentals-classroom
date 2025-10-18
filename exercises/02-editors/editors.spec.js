import { editorRecommendation } from './editors.js';
test('lists at least VS Code', () => {
  expect(editorRecommendation()).toContain('VS Code');
});
