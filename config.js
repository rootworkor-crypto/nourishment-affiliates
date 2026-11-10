/* Program settings. Change values here, redeploy, and every page updates. Loaded before site.js. */
var CFG={
  name:'Nourishment',
  tagline:'Share a daily herbal nutrition program people can start with confidence, and earn on every sale.',
  rate:25, disc:10, hold:30, minPay:50, payDay:15, cookie:60,
  store:'https://pci.jotform.com/form/262628007312046',   /* NP Nourishment Program Enrollment Form */
  health:'',   /* the enrollment form collects health details itself; set a link here to show a separate questionnaire button */
  contact:'rootworkor@gmail.com',        /* affiliate support email shown on the site, e.g. affiliates@yourdomain.com */
  applyEndpoint:'',    /* optional form service URL that accepts a POST of the application */
  products:[
    {name:'Tier 1: The Introductory Nourishment Suite',price:110,desc:'Starter program. Includes Apex Immune 2. Free shipping.',url:''},
    {name:'Tier 2: The Systemic Refinement Suite',price:189.99,desc:'Core program. Includes Apex Immune 2. Free shipping.',url:''},
    {name:'Tier 3: The Master Nourishment Protocol',price:299.99,desc:'Full program with consultation prep and the Botanical Bio-Availability Grid. Includes Apex Immune 2. Free shipping.',url:''}],
  /* Single products: one item or a month choice. Leave price null until confirmed; the card then says "Price on the order form". */
  singles:[
    {name:'Apex Immune 2',tag:'Anchor of every program',desc:'The featured Apex Herbs product. Included in every program, also sold on its own.',url:'',options:[{label:'Single purchase',price:null}]}],
  apexLogo:'assets/apex-logo.png',   /* optional: upload the Apex Herbs logo to /assets */
  tierOn:false,
  tiers:[{name:'Member',min:0,rate:25},{name:'Partner',min:2500,rate:27.5},{name:'Leader',min:10000,rate:30}]
};
