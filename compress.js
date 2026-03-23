const { execSync } = require('child_process');
try {
  console.log('Compressing services-1.png...');
  execSync('npx -y sharp-cli public/services-1.png -o public/services-1.webp', { stdio: 'inherit' });
  console.log('Compressing services-2.png...');
  execSync('npx -y sharp-cli public/services-2.png -o public/services-2.webp', { stdio: 'inherit' });
  console.log('Success!');
} catch (e) {
  console.error('Failed:', e.message);
}
