import fs from 'fs';
try {
  const raw = fs.readFileSync('results.json', 'utf8');
  const data = JSON.parse(raw);
  const tests = data.testResults.flatMap(s =>
    s.assertionResults.map(a => ({ title: a.title, status: a.status, fullName: a.fullName }))
  );
  const passed = tests.filter(t => t.status === 'passed').length;
  const total = tests.length;
  const score = Math.round((passed / Math.max(total, 1)) * 100);
  const summary = { score, passed, total, details: tests };
  fs.writeFileSync('autograde-summary.json', JSON.stringify(summary, null, 2));
  console.log(JSON.stringify(summary));
} catch (e) {
  console.error(e.message);
  process.exit(0);
}
