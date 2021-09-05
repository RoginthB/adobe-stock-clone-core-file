import React from 'react';
import './App.css';


function App() {
  return (
    <div  >
      <div className="nav-bar">
        <div><NavBarLeft /></div >
        <div><NavBarRight /></div >
      </div>
      <TopContainerImage />
      <div>

        <div >
          <div className="bg-primary">
            <div className="center-align">
              <div className="container-fluid">
                <div className="container flex">
                  <div className="display-6">
                    <span className="text-light" data="fmf-promo-text-long">Get 10 free Adobe Stock images.</span>
                  </div>
                  <div className="p-2">
                    <div className="p-2">
                      <a href="https://stock.adobe.com/in/promo/firstmonthfree" className="button1" data-t="fmf-call-to-action-long" data-product-key="/Applications/StockSubSmallAnnual">Start now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
      <div>

        <div className="container ">
          <h3 className="text-secondary align-center">
            <strong className="headding1" data-t="discover-collections-title">CURATED ASSET COLLECTIONS</strong>
          </h3>
          <div className="align-center">
            <div className=" row2 ">
              <p className="">
                <strong className="text-muited" data-t="discover-collections-description">Explore diverse collections of our most incredible high-resolution, royalty-free, stock assets</strong>
              </p>
            </div>
          </div>
          <div className="row">
            <hr />
          </div>
        </div>

      </div>
      <Body />

    </div >
  );
}




function NavBarLeft() {
  return (
    <div className="nav-bar-content" >
      <ul>
        <li> <a href="https://stock.adobe.com/in/photos">Photos</a> </li>
        <li><a href="https://stock.adobe.com/in/illustrations">Illustrations</a></li>
        <li><a href="https://stock.adobe.com/in/vectors">Vectors</a></li>
        <li><a href="https://stock.adobe.com/in/video">Videos</a></li>
        <li><a href="https://stock.adobe.com/in/audio">Audio</a></li>
        <li><a href="https://stock.adobe.com/in/templates">Templates</a></li>
        <li><a href="https://stock.adobe.com/in/3d-assets">3D</a></li>
        <li><a href="https://stock.adobe.com/in/free">Free</a></li>
        <li><a href="https://stock.adobe.com/in/premium">Premium</a></li>
        <li><a href="https://stock.adobe.com/in/editorial">Editorial</a></li>
      </ul>
    </div>

  );
}
function NavBarRight() {
  return (
    <div className="nav-bar-content">
      <ul>
        <li> <a href="tel:1800 102 5567">Sales: 1800 102 5567 </a> </li>
        <li><a href="https://contributor.stock.adobe.com/in/?as_channel=stock&as_source=globalnav&as_campclassName=brand&as_campaign=header">
          <i className="bi bi-cloud-upload"></i> Sell
        </a>
        </li>
        <li><a href="https://stock.adobe.com/in/plans">
          <i className="bi bi-tag"></i>
          Pricing
        </a></li>
        <li><a href="hhttps://stock.adobe.com/in/?as_channel=sem&as_campclassName=brand&as_campaign=IN%7CCPRO%7CStock%7CPURCH%7CAS_Brand_Exact%7CGG%7C%7C&as_source=google&as_camptype=acquisition&sdid=599F8S6N&mv=search&ef_id=CjwKCAjwybyJBhBwEiwAvz4G73XsgHU_I-skB5sytApHzY9tf6tOlGxD5pPg69sDlQTVt-mavUHXCxoCgZIQAvD_BwE:G:s&s_kwcid=AL!3085!3!389405304703!e!!g!!adobe%20stock!6828711555!74928189810#ttps://stock.adobe.com/in/video">Sign in</a></li>
        <li><a href="https://www.adobe.com/creativecloud">
          <img className="nav-img" src="https://img.icons8.com/ios/50/ffffff/adobe-logo.png" />
        </a></li>
      </ul>
    </div>

  );
}

function TopContainerImage() {
  return (
    <div >
      <div className="nav-bar2">
        <div className="curser-ponter">
          <div className="sc-ktHwxA jgZGTy">
            <svg viewBox="0 0 700 149.5" width="170"><g><path fill="#0C131F" d="M0 122V27.4c0-1.8.1-3.6.5-5.3s.9-3.5 1.6-5.1 1.5-3.2 2.5-4.8S6.8 9.3 8 8c1.3-1.3 2.7-2.4 4.2-3.4s3.1-1.9 4.8-2.5c1.7-.7 3.4-1.2 5.1-1.6 1.8-.4 3.5-.5 5.3-.5h100.2c1.8 0 3.6.1 5.3.5 1.8.4 3.5.9 5.1 1.6s3.2 1.5 4.8 2.5 2.9 2.2 4.2 3.4c1.3 1.3 2.4 2.7 3.4 4.2s1.9 3.1 2.5 4.8c.7 1.7 1.2 3.4 1.6 5.1.4 1.8.5 3.5.5 5.3V122c0 1.8-.1 3.6-.5 5.3-.4 1.8-.9 3.5-1.6 5.1-.7 1.7-1.5 3.2-2.5 4.8s-2.2 2.9-3.4 4.2c-1.3 1.3-2.7 2.4-4.2 3.4s-3.1 1.9-4.8 2.5c-1.7.7-3.4 1.2-5.1 1.6-1.8.4-3.5.5-5.3.5H27.5c-1.8 0-3.6-.1-5.3-.5-1.8-.4-3.5-.9-5.1-1.6-1.7-.7-3.2-1.5-4.8-2.5s-2.9-2.2-4.2-3.4c-1.3-1.3-2.4-2.7-3.4-4.2s-1.9-3.1-2.5-4.8c-.7-1.7-1.2-3.4-1.6-5.1-.4-1.6-.6-3.4-.6-5.3z"></path><path fill="#FFFFFF" d="M54.9 109.6c-3.8 0-7.3-.4-10.4-1-3.1-.6-5.7-1.5-7.9-2.5-.6-.3-.8-.9-.8-1.7V92.2c0-.3.1-.4.3-.6.1-.1.4-.1.6.1 2.9 1.8 5.9 3.1 9.1 4 3.2.9 6.3 1.3 9.4 1.3 3.9 0 6.7-.6 8.4-1.8 1.7-1.2 2.5-2.7 2.5-4.5 0-1.2-.3-2.2-.8-3.1-.6-.9-1.5-1.8-2.9-2.7-1.4-.9-3.2-1.8-5.6-2.7L51.7 80c-4.2-1.8-7.4-3.7-9.8-5.7-2.4-2-4-4.2-4.8-6.5-.9-2.3-1.4-4.8-1.4-7.5 0-3.7.9-7.1 2.7-10 1.9-3 4.5-5.4 8.2-7.1 3.6-1.7 8.2-2.6 13.6-2.6 3.2 0 6.3.2 9.2.6 2.8.4 5.1 1.1 6.8 1.9.5.3.7.7.7 1.3V56c0 .1-.1.3-.3.4-.1.1-.4.1-.6-.1-2-1.1-4.5-1.9-7.1-2.6-2.7-.4-5.6-.7-8.5-.7-1.9 0-3.7.1-5 .5-1.4.4-2.5.8-3.3 1.3s-1.5 1.2-1.9 1.9c-.4.8-.6 1.6-.6 2.4 0 1.1.3 2.1.9 2.9.6.9 1.7 1.7 3.1 2.6 1.4.9 3.4 1.9 5.9 3l3.8 1.4c4.5 1.9 8 3.8 10.5 5.9 2.5 2.1 4.3 4.3 5.3 6.8s1.5 5 1.5 7.9c0 4-1.1 7.6-3.2 10.6-2.2 3-5.1 5.4-8.9 7s-8.4 2.4-13.6 2.4zM115.2 98.5v8.4c0 .7-.3 1.2-.8 1.3-1.3.4-2.7.7-4.1 1s-3.1.4-4.9.4c-4.5 0-7.9-1.2-10.5-3.5-2.5-2.3-3.8-6.1-3.8-11.2V69.6H85c-.6 0-.8-.3-.8-.9V58.5c0-.6.3-.8.9-.8h6.1c.1-1.2.1-2.5.3-4 .1-1.5.2-3.1.4-4.6.1-1.5.3-2.8.4-3.8.1-.2.1-.4.3-.6.1-.1.3-.3.5-.4l12.2-1.5c.2-.1.4-.1.5 0 .1.1.2.3.2.6-.1 1.6-.2 3.7-.3 6.4-.1 2.7-.1 5.3-.2 7.9h9.5c.4 0 .6.3.6.8v10.4c0 .4-.1.6-.5.7h-9.7v21.9c0 2.3.4 4 1.2 5 .8 1 2.2 1.5 4.3 1.5.6 0 1.2 0 1.7-.1.6 0 1.1-.1 1.7-.1.2-.1.4-.1.6.1.2.1.3.3.3.6z"></path><path fill="#FFFFFF" d="M213.2 79.6h15.1c-.3-1.3-.8-2.7-1.4-4.3-.6-1.6-1-3.3-1.6-5.1s-1.1-3.6-1.7-5.5c-.6-1.8-1.1-3.6-1.6-5.2-.6-1.7-.9-3.2-1.3-4.6h-.1c-.6 2.2-1.3 4.7-2 7.5-.9 3-1.7 5.9-2.7 8.9-.9 2.9-1.8 5.7-2.7 8.3zM232 91.5h-22.2l-4.7 14.2c-.1.6-.6.8-1.1.8h-11c-.7 0-.9-.3-.8-.9l19.2-55.4c.2-.6.3-1.1.6-1.9.2-.8.3-2 .3-4 0-.5.2-.7.6-.7h15.4c.5 0 .7.2.8.6l21.8 61.6c.2.6 0 .9-.5.9h-12.5c-.6 0-.9-.2-1-.7L232 91.5zM283.9 95.5v-26c-.5-.2-1-.3-1.6-.3-.7-.1-1.3-.1-1.9-.1-2.4 0-4.7.5-6.8 1.5-2 1-3.8 2.5-5 4.4s-1.9 4.4-1.9 7.5c0 2.4.3 4.4.9 6.1.7 1.7 1.6 3.2 2.7 4.2 1.1 1.1 2.5 1.9 4 2.5 1.6.6 3.2.8 5.1.8.8 0 1.6 0 2.4-.1.7 0 1.4-.3 2.1-.5zm-6 12.1c-4.8 0-9-.9-12.9-2.7-3.9-1.8-6.8-4.6-9-8.1-2.2-3.6-3.3-8.2-3.3-13.7 0-4.7 1.1-8.9 3.3-12.6 2.2-3.9 5.3-6.8 9.6-9.2 4.2-2.3 9.2-3.4 15-3.4h1.4c.5 0 1 .1 1.8.1V39.1c0-.5.2-.7.7-.7h12.1c.3 0 .6.2.6.6v56.8c0 1.1 0 2.3.1 3.6.1 1.4.1 2.5.3 3.4 0 .5-.2.7-.7.9-3.3 1.4-6.6 2.4-9.8 3-3.1.5-6.2.9-9.2.9zM328.2 69c-1.8 0-3.5.6-5 1.6s-2.6 2.6-3.5 4.7c-.9 2-1.3 4.4-1.3 7.4 0 2.8.5 5.2 1.3 7.3.8 2 2 3.6 3.6 4.8s3.4 1.7 5.6 1.7c1.8 0 3.5-.6 5-1.6s2.7-2.6 3.5-4.7 1.3-4.6 1.3-7.5c0-2.6-.3-4.9-1-6.9s-1.8-3.8-3.3-5c-1.6-1.2-3.7-1.8-6.2-1.8zm.6-11.1c3.9 0 7.3.7 10.2 2 2.8 1.4 5.3 3.2 7.3 5.5 1.9 2.3 3.5 4.9 4.4 7.9 1 3 1.5 6 1.5 9.3 0 5-1 9.3-3.1 13.1-2 3.8-4.8 6.7-8.3 8.8-3.5 2.2-7.6 3.2-12.3 3.2-4.1 0-7.6-.7-10.6-2.2-3-1.4-5.5-3.3-7.4-5.7-1.9-2.4-3.4-5-4.3-8-.9-3-1.5-5.9-1.5-9.1 0-4.6 1-8.6 3-12.4 1.9-3.8 4.7-6.7 8.3-9 3.7-2.3 7.9-3.4 12.8-3.4zM390.8 82c0-2.8-.6-5.2-1.6-7.2-1-1.9-2.4-3.3-4.2-4.2-1.8-.9-3.9-1.4-6-1.4-1.6 0-2.7.1-3.5.2-.8.1-1.5.3-2.2.6v26.1c.6.1 1.1.2 1.8.3.6.1 1.3.1 1.8.1 2.5 0 4.8-.6 6.8-1.6s3.8-2.6 5.1-4.7c1.3-2.2 2-4.9 2-8.2zm-30.2-43.6h11.7c.7 0 .9.2.9.8v19.7c1.3-.3 2.6-.6 4-.8 1.4-.2 2.7-.3 4.1-.3 4.8 0 8.9 1 12.3 3.1 3.4 2 6 4.8 8 8.2 1.9 3.4 2.8 7.3 2.8 11.6 0 4.4-.8 8.4-2.4 11.7-1.6 3.4-3.8 6.1-6.5 8.3-2.7 2.2-5.8 3.9-9.3 5-3.4 1.1-6.9 1.7-10.6 1.7-2.6 0-5.1-.2-7.6-.6-2.5-.3-5-.9-7.4-1.7-.3-.1-.6-.5-.6-.9V39.1c0-.5.2-.7.6-.7zM423.3 76.9H439.4c.7 0 1.3-.1 1.4-.1v-.3-.3c0-.6-.1-1.3-.3-2.2-.2-.8-.7-1.7-1.4-2.5-.7-.9-1.5-1.6-2.5-2.2-1-.6-2.4-.8-4-.8-1.9 0-3.5.5-4.9 1.3-1.4.9-2.3 1.9-3 3.2-.7 1.2-1.1 2.5-1.4 3.9zm18.9 9.3h-18.9c.2 1.8.8 3.5 1.8 5s2.5 2.7 4.4 3.6c1.9.9 4.6 1.4 7.6 1.4 2.2 0 4.2-.2 6.1-.6 1.9-.3 3.9-.9 5.7-1.7.3-.2.6-.1.6.5v9.1c0 .3 0 .6-.1.7-.1.1-.2.3-.6.5-1.8.9-4 1.6-6.3 2-2.3.5-5.1.7-8.4.7-4.6 0-8.3-.7-11.5-2.2-3.1-1.4-5.6-3.3-7.5-5.6-1.9-2.4-3.3-5-4.2-7.9-.9-2.8-1.3-5.8-1.3-8.8 0-3.3.6-6.5 1.6-9.6 1-3.1 2.5-5.8 4.4-8.1 1.9-2.4 4.3-4.2 7.3-5.6 2.8-1.4 6.3-2 10-2 3.6 0 6.7.6 9.3 1.8 2.6 1.3 4.7 2.8 6.4 5 1.6 2 2.8 4.3 3.5 6.7.7 2.4 1.1 4.9 1.1 7.2 0 1.5 0 2.7-.1 4-.1 1.3-.2 1.9-.3 2.5-.1.5-.3.7-.8.8-.5.1-1.1.1-2 .2-.9.1-2 .1-3.4.1-1.2.3-2.7.3-4.4.3zM497.2 107.6c-3.5 0-6.7-.3-9.7-.9-3-.6-5.3-1.5-7.4-2.5-.5-.2-.7-.8-.7-1.6V91.1c0-.2.1-.5.2-.6.1-.1.3-.1.6 0 2.7 1.7 5.6 3 8.5 3.8 3 .8 5.9 1.3 8.9 1.3 3.6 0 6.3-.6 7.9-1.7s2.4-2.5 2.4-4.2c0-1-.2-1.9-.8-2.8s-1.5-1.7-2.7-2.6c-1.3-.9-3-1.7-5.2-2.6l-4.8-2c-3.9-1.7-6.9-3.4-9.2-5.3-2.2-1.9-3.8-3.9-4.7-6.1-.9-2.2-1.3-4.6-1.3-7.1 0-3.4.9-6.6 2.6-9.4 1.7-2.8 4.3-5 7.7-6.7s7.6-2.5 12.7-2.5c3 0 5.8.2 8.5.6 2.7.3 4.8 1 6.5 1.9.3.2.6.7.6 1.3v10.8c0 .2-.1.3-.2.6-.1.1-.3.1-.6 0-1.9-1.1-4.2-1.9-6.7-2.4-2.6-.6-5.2-.8-8.1-.8-1.8 0-3.3.1-4.7.5-1.3.3-2.3.7-3.1 1.3-.8.6-1.4 1.1-1.7 1.8s-.6 1.5-.6 2.2c0 1 .2 1.9.8 2.7.6.8 1.5 1.6 2.8 2.5 1.4.8 3.2 1.7 5.6 2.7l3.5 1.5c4.3 1.7 7.6 3.6 9.9 5.6 2.4 1.9 4 4.1 5 6.4.9 2.3 1.5 4.7 1.5 7.2 0 3.9-1 7.2-3 10s-4.8 5-8.3 6.6c-3.4 1.2-7.7 2-12.7 2zM552.8 97v8c0 .7-.2 1.1-.7 1.3-1.4.5-2.7.8-4 1-1.4.2-2.8.3-4.6.3-4.2 0-7.5-1.1-9.8-3.3-2.3-2.2-3.4-5.7-3.4-10.5V69.9h-5.8c-.6-.1-.8-.3-.8-.9v-9.4c0-.6.3-.9.9-.9h5.8c.1-1.1.1-2.4.2-3.9s.1-3 .3-4.3c.1-1.4.3-2.6.5-3.4.1-.2.1-.5.3-.6.1-.1.3-.2.6-.3l11.3-1.5c.2-.1.5-.1.6 0 .1.1.2.2.2.6-.1 1.5-.2 3.5-.3 6-.1 2.5-.2 5-.2 7.4h9c.6 0 .8.2.8.8v9.7c0 .3-.2.6-.7.7h-9v20.6c0 2.2.3 3.6 1.1 4.7.7 1 2 1.5 4.1 1.5.6 0 1.1 0 1.6-.1s1-.1 1.6-.3c.2 0 .3 0 .5.1.1-.1-.1.3-.1.6zM580.1 69c-1.8 0-3.5.6-5 1.6s-2.6 2.6-3.5 4.7c-.9 2-1.3 4.4-1.3 7.4 0 2.8.5 5.2 1.3 7.3s2 3.6 3.6 4.8 3.4 1.7 5.6 1.7c1.8 0 3.5-.6 5-1.6s2.7-2.6 3.5-4.7c.8-2 1.3-4.6 1.3-7.5 0-2.6-.3-4.9-1-6.9s-1.8-3.8-3.3-5c-1.6-1.2-3.7-1.8-6.2-1.8zm.6-11.1c3.9 0 7.3.7 10.2 2 2.8 1.4 5.3 3.2 7.3 5.5 1.9 2.3 3.5 4.9 4.4 7.9 1 3 1.5 6 1.5 9.3 0 5-1 9.3-3.1 13.1-2 3.8-4.8 6.7-8.3 8.8-3.5 2.2-7.6 3.2-12.3 3.2-4.1 0-7.6-.7-10.6-2.2-3-1.4-5.5-3.3-7.4-5.7-1.9-2.4-3.4-5-4.3-8-.9-3-1.5-5.9-1.5-9.1 0-4.6 1-8.6 3-12.4s4.7-6.7 8.3-9c3.7-2.3 7.9-3.4 12.8-3.4zM646.1 95.2v10c0 .3-.1.7-.5.8-1.6.7-3.2 1-5.1 1.3-1.8.2-3.8.3-5.7.3-3.9 0-7.4-.6-10.5-1.8-3.1-1.3-5.8-3-8-5.2s-3.9-4.9-5.1-7.9c-1.1-3-1.8-6.3-1.8-9.8 0-4.8 1.1-9.1 3.4-12.9 2.3-3.8 5.3-6.7 9.4-9 4.1-2.2 8.9-3.3 14.3-3.3 2.4 0 4.2.1 5.6.3 1.4.2 2.5.5 3.2.8.3.1.6.5.6 1l-.1 9.9c0 .6-.2.8-.8.7-.9-.3-2-.7-3.4-.9-1.4-.2-3-.3-4.7-.3-2.7 0-5.1.5-7.2 1.5-2 .9-3.8 2.4-5 4.3-1.3 1.9-1.8 4.3-1.8 7.3 0 3.3.7 5.9 2.2 7.9 1.4 1.9 3.2 3.3 5.5 4.2 2.2.8 4.4 1.3 6.6 1.3 1.7 0 3.3-.1 4.7-.2 1.4-.1 2.5-.3 3.3-.6.6-.3.9-.2.9.3zM667.2 39.3v66.3c0 .7-.3.9-.9.9h-11.6c-.7 0-.9-.3-.9-.9V39.2c0-.2.1-.3.2-.6.1-.1.3-.2.8-.2h11.5c.5 0 .9.3.9.9zm17.3 19.5h12.4c.3 0 .6.1.7.3.1.2 0 .5-.1.7-.7.8-1.6 1.8-2.7 3.1-1.1 1.4-2.5 2.7-4 4.4-1.5 1.6-3 3.3-4.4 4.9-1.5 1.6-2.8 3.2-4.1 4.6-1.3 1.4-2.3 2.5-3 3.3-.1.1-.1.1-.1.2s0 .1.1.2c1.4 1.7 3 3.6 4.7 5.9 1.7 2.2 3.5 4.4 5.5 6.7s3.8 4.6 5.6 6.7c1.8 2.2 3.4 4.2 4.9 5.9.2.2.2.3.1.6-.1.2-.3.3-.6.3h-15.2c-.3 0-.6 0-.7-.1-.1-.1-.3-.2-.6-.6-.8-1.1-2-2.6-3.6-4.7-1.6-2-3.3-4.3-5.2-6.7-1.8-2.4-3.5-4.7-5.1-6.8-1.6-2.2-2.8-3.8-3.8-4.9-.2-.3-.5-.7-.5-.9-.1-.2.1-.6.5-.9.8-1 1.9-2.3 3.2-3.9 1.4-1.6 2.7-3.2 4.2-5s3-3.5 4.3-5.2c1.4-1.7 2.6-3.2 3.8-4.6s1.8-2.3 2.3-2.8c.2-.3.5-.6.6-.6.2 0 .4-.1.8-.1z"></path></g></svg></div>
        </div>
        <div>
          <h6 className="text-light curser-ponter">My Libraries <i className="bi bi-chevron-compact-down"></i></h6>
        </div>
      </div>
      <div className="align-items"  >
        <div>
          <div>
            <h1 data-t="main-header-title" className="sc-kUaPvJ cxlFLp">Discover royalty-free stock photos, pictures and images</h1></div>

          <div >
            <Btn />
          </div>



        </div>
      </div >
      <div>
        <div className="nav-bar4 ">
          <h5 className="text-light curser-ponter">
            by roginth_b
          </h5>
        </div>

      </div>
      <div className="nav-bar3">
      </div>
      <img className="top-image-container" src="https://slp-statics.astockcdn.net/static_assets/staging/21fall/photos/hero/hero-cover-3.jpg?width=1555" />
    </div >
  );
}

function Btn() {
  return (
    <div>
      <div method="get" action="/in/search/images" className="js-search-form btn-sreach" data-ingest-workflow="stock-search">
        <div>
          <input type="hidden" name="load_type" value="search" />
          <input type="hidden" name="native_visual_search" value="" className="js-clear-before-visual-search js-clear-after-visual-search" />
          <input type="hidden" name="similar_content_id" value="" className="js-clear-before-visual-search js-clear-after-visual-search" />
          <input type="hidden" name="is_recent_search" className="js-is-recent-search" />
          <input type="hidden" name="search_type" value="usertyped" className="js-search-type" />
        </div>
        <div className="container-relative white hero-input-group">
          <div className="input-box" data-active="input">
            <div className=" btn-sreach  bg-light ">


              <div>
                <div className="">
                  <select className="btn btn-light px-2" data-t="filter-asset-type" aria-label="Asset Type Dropdown">
                    <option value="all" data-ingest-clicktype="all-asset-dropdown-selection" data-t="all-asset-dropdown-selection">
                      All
                    </option>
                    <option selected="selected" value="images" data-ingest-clicktype="images-asset-dropdown-selection" data-t="images-asset-dropdown-selection">
                      Images
                    </option>
                    <option value="videos" data-ingest-clicktype="videos-asset-dropdown-selection" data-t="videos-asset-dropdown-selection">
                      Videos
                    </option>
                    <option value="audio" data-ingest-clicktype="audio-asset-dropdown-selection" data-t="audio-asset-dropdown-selection">
                      Audio
                    </option>
                    <option value="templates" data-ingest-clicktype="templates-asset-dropdown-selection" data-t="templates-asset-dropdown-selection">
                      Templates
                    </option>
                    <option value="3d" data-ingest-clicktype="3d-asset-dropdown-selection" data-t="3d-asset-dropdown-selection">
                      3D
                    </option>
                    <option value="free" data-ingest-clicktype="free-asset-dropdown-selection" data-t="free-asset-dropdown-selection">
                      Free
                    </option>
                    <option value="premium" data-ingest-clicktype="premium-asset-dropdown-selection" data-t="premium-asset-dropdown-selection">
                      Premium
                    </option>
                    <option value="editorial" data-ingest-clicktype="editorial-asset-dropdown-selection" data-t="editorial-asset-dropdown-selection">
                      Editorial
                    </option>
                  </select>
                </div>
              </div>


              <div>
                <div className="container-table-cell container-full container-relative">
                  <input name="k" className="search-box bg-light px-2 " type="text" placeholder="Search" data-t="search-form-text-input" aria-label="Search" autocomplete="off" />
                  <div className="" data-state="hidden">
                    <div className="padding-top-small">
                      <div className="container-relative">
                        <div className="menu container-absolute container-full">
                          <div className="text-regular">
                            <ul className="js-search-autocomplete-panel nav nav-heavy-metal-text nav--hover-white-smoke nav--tertiary"></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="js-search-recent-container"></div>
                </div>

              </div>

              <div >
                <div>
                  <button type="button" className="btn btn-light" tabindex="0" aria-label="Visual Search">
                    <i className="bi bi-camera px-2"></i>
                  </button>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="container flex-box">
      <Card href="https://stock.adobe.com/in/collections/Pnb3vT0akesPgEDqaqSlBRifOFBa3LoJ" src="https://as.ftcdn.net/r/v1/pics/491a17ef0536de79e52a8cb5a52592f0ad5f3471/home/discover_collections/21Jun/photos.webp" titel="Stock photos" name="Beautiful and inspiring royalty-free stock images." />
      <Card href="https://stock.adobe.com/in/collections/zlAn3gaJJAEFDXodt3XM1G4KeIQNQI0F" src="https://as.ftcdn.net/r/v1/pics/e989cf67f88c0b3faee294233342306c9f3dc2bd/home/discover_collections/21Jun/premium.webp" titel="Premium stock images" name="High-impact, royalty-free stock photos for powerful storytelling." />
      <Card href="https://stock.adobe.com/in/collections/UUcTLZzjqflZi38Tr6tjCc2py2yjOI2j" src="https://as.ftcdn.net/r/v1/pics/1aa83ed018fa0e131e77d3e12df1015d68469b06/home/discover_collections/21Jun/video.webp" titel="Stock video footage" name="Stunning 4K and HD stock video clips for any motion project." />
      <Card href="https://stock.adobe.com/in/collections/VpxXUTnMDEmZADmApgLNDT3MQVEYZnTv" src="https://as.ftcdn.net/r/v1/pics/fcbe6fd9c8df330a29fc942f863d2fef0f34d5a3/home/discover_collections/21Jun/templates.webp" titel="Royalty-free templates" name="Made for Adobe InDesign, Photoshop, Illustrator, and more." />
      <Card href="https://stock.adobe.com/in/collections/Ue8IAIqPY55R9VcilM5mo17Hm53J0U3L" src="https://as.ftcdn.net/r/v1/pics/063b749dd41015b72cf19906e6979da680cf8487/home/discover_collections/21Jun/vector.webp" titel="Vector art and Illustrations" name="Royalty-free stock illustrations and vector art." />
      <Card href="https://stock.adobe.com/in/audio" src="https://as.ftcdn.net/r/v1/pics/ba27c28674c8d58886a4e4f9391a4c813750e78c/home/discover_collections/21Jun/audio.webp" titel="Stock music and audio" name="Discover a wide range of amazing royalty-free music." />


    </div>
  );
}

function Card( props ) {
  return (

    <div className="card width m-3 ">
      <a className="a" href={props.href}>
        <img src={props.src} className="card-img-top hover" alt="..." />
      </a>
      <div className="card-body">
        <h5 className="">{props.titel}</h5>
        <p className="card-text">{props.name}</p>
      </div>

    </div>

  );
}






export default App;
