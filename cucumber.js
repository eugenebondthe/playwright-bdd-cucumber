const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.js
    --require features/**/*.feature
`;

export default {
    default: common,
};