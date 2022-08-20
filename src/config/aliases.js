// define aliases for directories that need to be imported globally
const aliases = (prefix = `src`) => ({
  "@atoms": `${prefix}/components/atoms`,
  "@molecules": `${prefix}/components/molecules`,
  "@organisms": `${prefix}/components/organisms`,
  "@templates": `${prefix}/components/templates`,
  "@components": `${prefix}/components`,
  "@config": `${prefix}/config`,
  "@enums": `${prefix}/enums`,
  "@hooks": `${prefix}/hooks`,
  "@icons": `${prefix}/components/atoms/Icons`,
  "@styles": `${prefix}/styles`,
  "@utils": `${prefix}/utils`,
  "@state": `${prefix}/state`,
  "@types": `${prefix}/types`,
  "@assets": `${prefix}/assets`,
});

module.exports = aliases;
