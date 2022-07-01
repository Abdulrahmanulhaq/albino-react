const HeaderComponent = () => {
  return (
    <>
      {/* <!-- LOADER --> */}
      {/* <div id="loader">
        <div className="position-center-center">
          <div className="ldr"></div>
        </div>
      </div> */}

      {/* <!-- Wrap --> */}
      <div id="wrap">

        {/* <!-- header --> */}
        <header className="sticky">
          <div className="container">

            {/* <!-- Logo --> */}
            <div className="logo"> <a href="index.html"><img className="img-responsive" src="images/logo.png" alt="" /></a> </div>
            <nav className="navbar ownmenu navbar-expand-lg">
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span
                  className="navbar-toggler-icon"></span> </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav">
                  <li className="scroll active"><a href="#hme">Home</a></li>
                  <li className="scroll"> <a href="#about">About </a> </li>
                  <li className="scroll"> <a href="#token">Token</a> </li>

                  <li className="scroll"> <a href="#roadmap">Road Map</a> </li>

                  <li className="scroll"> <a href="#contact">Contact</a> </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </header>

        {/* <!-- HOME MAIN  --> */}
        <section className="simple-head" data-stellar-background-ratio="0.5" id="hme">
          {/* <!-- Particles --> */}
          <div id="particles-js"></div>
          <div className="position-center-center">
            <div className="container text-center">
              <h1>Albino </h1>
              <p>An Innovative NFT & Metaverse
                platform</p>
              <a href="#." className="btn">Join Us</a> <a href="#." className="btn btn-inverse">View White Paper</a>
            </div>
          </div>
        </section>

        {/* <!-- Content --> */}
        <div id="content">

          {/* <!-- Why Choose Us --> */}
          <section className="why-choose padding-top-150 padding-bottom-150" id="about">
            <div className="container">

              {/* <!-- Why Choose Us  ROW--> */}
              <div className="row">
                <div className="col-md-7 margin-top-60">

                  {/* <!-- Tittle --> */}
                  <div className="heading margin-bottom-20">
                    <h4 className="margin-bottom-10">INTRODUCTION</h4>
                  </div>
                  <p>Albino is a modern-day all-in-one decentralized cryptocurrency platform on
                    Polygon Blockchain. Albino is a high-performance club that offers a variety of
                    services on a single platform.</p>

                  <p>A full ecology will be built around the Albino, with features like staking, NFT
                    Marketplace, Albino Metaverse, and an exchange, as well as Liquidity Pool.
                    Albino will create its own NFT marketplace and serve as a hub for the
                    decentralized community. Stake your NFT, gain tokens, and spend them on our
                    own marketplace to buy real-world items. Our NFT collections are unique in that
                    only one may exist, and they are difficult to duplicate. As a result, it's safe to
                    suppose that you'll be one of the few people who have these treasures.</p>

                  <p>Users will be able to earn yield in the form of Albino tokens by staking. We are
                    changing the market with a decentralized global financial system that is more
                    transparent, accessible, and fair. Our first blockchain is the Polygon blockchain.
                    Albino is a Gaming based community token developed mainly to create a safe
                    haven for game lovers. Our main goal is to provide people with a safe and
                    trustworthy place where they can use their crypto for rewards, staking & Games
                    Prizes.
                  </p>

                  <p>Technology will enable a financial revolution, allowing everyone to be more
                    financially linked and empowered. Albino aims to give security, transparency,
                    high deposit and withdrawal limits, and higher odds. In a nutshell, Albino is a
                    single-form solution-based ecosystem.
                  </p>


                  <span></span>
                </div>
              </div>

              {/* <!-- Image --> */}
              <div className="col-md-5 text-right"> <img src="images/chain-img.png" alt="Why Choose Us Image" /> </div>
            </div>

            {/* <!-- Services ROW --> */}
            <div className="row">

              {/* <!-- Services --> */}
              <div className="col-md-3">
                <div className="ib-icon"> <i className="flaticon-smartphone"></i> </div>
                <div className="ib-info">
                  <h4 className="h6">Community</h4>
                  <p>The Albino ecosystem's most valuable asset is its community. We wondered at
                    first if a project could flourish based on a decentralized, community effort. Due to
                    the power of its community members and investors, Albino was able to win.
                  </p>
                </div>
              </div>

              {/* <!-- Services --> */}
              <div className="col-md-3">
                <div className="ib-icon"> <i className="flaticon-flat-world-map"></i> </div>
                <div className="ib-info">
                  <h4 className="h6">Utility</h4>
                  <p>In the crypto realm, we believe utility is the cornerstone of value. The Albino
                    platform was established on the belief that the crypto sector is severely
                    underutilized. We believe that utility will drive crypto adoption and growth and
                    that the Albino will be the crypto ecosystem that people adopt because of its
                    utility-focused nature.
                  </p>
                </div>
              </div>

              {/* <!-- Services --> */}
              <div className="col-md-3">
                <div className="ib-icon"> <i className="flaticon-secure-shield"></i> </div>
                <div className="ib-info">
                  <h4 className="h6">Inclusivity</h4>
                  <p>Inclusivity is at the very heart of our mission here at Albino. We believe that
                    anyone, regardless of race, gender, or religion should have easy access to wealth
                    generation. Unfortunately, not everyone has disposable income. With Albino, your
                    income or access to capital is irrelevant to your ability to generate wealth.</p>
                </div>
              </div>

              {/* <!-- Services --> */}
              <div className="col-md-3">
                <div className="ib-icon"> <i className="flaticon-credit-card"></i> </div>
                <div className="ib-info">
                  <h4 className="h6">Interconnectivity</h4>
                  <p>Simply said, every component of a system interacts with and is reliant on the
                    others. Albino believes in building a linked system of mutual trust and
                    trustworthiness, where the sum of its parts is more than the sum of its parts.</p>
                </div>
              </div>


            </div>
          </section>
        </div>


        <section className="why-choose padding-top-5 padding-bottom-150" id="about">
          <div className="container">

            {/* <!-- Why Choose Us  ROW--> */}
            <div className="row">
              <div className="col-md-7 margin-top-60">

                {/* <!-- Tittle --> */}
                <div className="heading margin-bottom-20">
                  <h6 className="margin-bottom-10"></h6>
                  <h4>MISSION</h4>
                </div>
                <p>Albino is a decentralized finance platform built on a blockchain with a
                  mission to create a community-driven ecosystem that empowered the
                  holders to better their financial condition.
                  <br />Our mission is to:
                </p>
                  <ul>
                    <li>-Provide every holder with simple and effective ways to gain
                      exposure to digital assets.</li>
                    <li>-Lower the barrier for entry to a more advanced financial ecosystem.</li>
                    <li>-Operate as a community-focused and community-driven digital
                      asset, fully decentralized in every sense of the word.</li>
                    <li>-Decrease volatility and increase positive price pressure in digital
                      asset staking.
                    </li>
                    <li>-Our mission is to create a new innovative NFT & Metaverse
                      platform.</li>
                    <li>-We envision building a new brand gaming industry.
                    </li>
                    <li>-Stake your NFT, earn tokens and use it on our marketplace to buy
                      or sell different things.
                    </li>
                  </ul>

                <span></span>
              </div>
            </div>

            {/* <!-- Image --> */}
            <div className="col-md-5 text-right"> <img src="images/bernard-hermant-z9AOxTYQBy4-unsplash.jpg"
              alt="Why Choose Us Image" /> 
            </div>
          </div>


      {/* </div>
    </div> */}
    </section >

  <section className="why-choose padding-top-5 padding-bottom-150" id="about">
    <div className="container">

      {/* <!-- Why Choose Us  ROW--> */}
      <div className="row">
        <div className="col-md-7 margin-top-60">

          {/* <!-- Tittle --> */}
          <div className="heading margin-bottom-20">
            <h6 className="margin-bottom-10"></h6>
            <h4>VISION</h4>
          </div>
          <p>Everyone participating in the project is working
            toward the same end goal as a result of the Albino
            Ecosystem. We envision a world where wealthbuilding strategies that were once only accessible
            to affluent individuals become available to
            everyone, transferring the power over our financial
            systems back to the people. Albino is going to
            create a revolutionary ecosystem to bring more
            people into digital assets, helping to earn a
            passive income through redistribution/reflection,
            by holding the token long-term, along with
            maintaining their privacy, security, and autonomy
            along with digital and social problems. Albino is
            going to create a revolutionary gaming ecosystem
            to bring more people into digital assets, Building a
            safe and secure legal crypto online gaming
            platform that is positioned for global adoption with
            no limitations helping to earn a handsome income.
          </p>

          <span></span></div>
      </div>

      {/* <!-- Image --> */}
      <div className="col-md-4 text-right"> <img src="images/diego-ph-fIq0tET6llw-unsplash.jpg"
        alt="Why Choose Us Image" /> </div>
    </div>


    </section >
  </div>
  {/* </div > */}

  {/* < !--Why Choose Us-- > */ }
  < section className="why-choose padding-bottom-150" id = "about" >
    <div className="container">

      {/* <!-- Why Choose Us  ROW--> */}
      <div className="row">
        <div className="col-md-7 margin-top-60">

          {/* <!-- Tittle --> */}
          <div className="heading margin-bottom-20">
            <h4 className="margin-bottom-10">PURPOSES OF OUR PLATFORM</h4>
            <br />
              <h4></h4>
          </div>



          <span></span></div>
      </div>

      {/* <!-- Image --> */}

    </div>

{/* <!-- Services ROW --> */ }
<div className="row">

  {/* <!-- Services --> */}
  <div className="col-md-3">

    <div className="ib-info">
      <h4 className="h6">The first easy-to-use gaming
        cryptocurrency
      </h4>
      <p>Metaverse is the world's first cryptocurrency
        designed just for online investors in metaverse
        with a fair advantage. In the most popular
        gaming community-building platform online,
        you may earn and sell virtual items
      </p>
    </div>
  </div>

  {/*<!-- Services -->*/}
  <div className="col-md-3">

    <div className="ib-info">
      <h4 className="h6">Virtual Goods on the
        Blockchain
      </h4>
      <p>A platform for managing, distributing, and
        trading virtual products. Gamers and
        content providers will benefit from a new
        system of virtual ownership.
      </p>
    </div>
  </div>

  {/* <!-- Services --> */}
  <div className="col-md-3">

    <div className="ib-info">
      <h4 className="h6">A new gaming experience with
        real ownership & value</h4>
      <p>As they play, online gamers may bring or
        transfer their assets from game to game,
        community to community, increasing the value
        of their digital wallet.
      </p>
    </div>
  </div>

  {/* <!-- Services --> */}
  <div className="col-md-3">

    <div className="ib-info">
      <h4 className="h6">A solution to Fraud & High
        Fees</h4>
      <p>Every legit virtual item purchase results in
        the loss of 7.5 things due to fraud. Tokens
        will establish trust and security issues when
        there will be loss of token
        .</p>
    </div>
  </div>


</div>
  </section >
  {/* </div > */}


  {/* < !--Why Choose Us-- > */ }
  < section className="why-choose padding-top-1 padding-bottom-10" id = "about" >
    <div className="container">

      {/* <!-- Why Choose Us  ROW--> */}
      <div className="row">
        <div className="col-md-7 margin-top-60">

          {/* <!-- Tittle --> */}
          <div className="heading margin-bottom-20">
            <h4 className="margin-bottom-10">BENEFITS OF ALBINO</h4>
          </div>
          <p>Albino emphasizes the necessity to compensate players for their Participation in
            Gaming. Earn play to earn rewards from our rewards pools. Rewards are distributed
            based on a gaming system that involves the rewards and NFT Marketplace. They can
            earn additional numbers of tokens from the gaming platforms.</p>

          <h5><b>Benefits for Gamers</b></h5>
            <ul>
              <li>-Purchase and sell things without the fear of being defrauded.</li>
              <li>-Maintain value by trading between gaming products for your currency in any
                community or game. Have precious cash and unique goods that you can't lose.</li>
              <li>-To find and exchange game stuff, go to Albino marketplace.</li>
              <li>-Play games to earn Albino tokens.</li>
              <li>-Retain value by converting bespoke virtual products back to Albino tokens.</li>
              <li>-Participate in communities and other ecosystem activities to earn Albino tokens.</li>
              <li>-Albino tokens may be used to purchase in-game stuff. Show off your possessions
                in website widgets to prove ownership.</li>
            </ul>
          <h5><b>Play-to-earn Rewards</b></h5>
          <p>
            Albino Ecosystem utilizes a Unique rewards mechanism. For example, if you hold a
            token you will earn rewards in the shape of an Albino token and the user can also hold,
            buy, and sell NFT to earn rewards.
          </p>




          <span></span></div>
      </div>

      {/* <!-- Image --> */}
      <div className="col-md-5 text-right"> <img src="images/choong-deng-xiang-EbbqeyHpbto-unsplash.jpg"
        alt="Why Choose Us Image" /> </div>
    </div>




  </section >
  {/* </div >
    </div > */}



  <section className="why-choose padding-top-5 padding-bottom-150" id="about">
    <div className="container">

      {/* <!-- Why Choose Us  ROW--> */}
      <div> <img src="images/choong-deng-xiang-tMswAYQgJxk-unsplash.jpg" alt="Why Choose Us Image" /> </div>
      <div className="row">
        <div className="margin-top-60">

          {/* <!-- Tittle --> */}
          <div className="heading margin-bottom-20">

            <h6 className="margin-bottom-10"></h6>

            <h1>ALBINO NFT</h1>
          </div>
          <p>An Albino, NFT is a digital asset that represents real-world objects like art, music, ingame items, and
            videos. They are bought and sold online, frequently with
            cryptocurrency, and they are generally encoded with the same underlying software
            as many cryptos.
          </p>
          <p>A non-fungible token (NFT) is financial security consisting of digital data stored in a
            blockchain, a form of a distributed ledger. The ownership of an NFT is recorded in the
            blockchain and can be transferred by the owner, allowing NFTs to be sold and
            traded. NFTs typically contain references to digital files such as photos, videos, and
            audio. Because NFTs are uniquely identifiable, they differ from other
            cryptocurrencies, which are fungible. The market value of an NFT is associated with
            the digital file it references.

          </p>

          <p>The transparent nature of the underlying code means that the scarcity and ownership
            of any given token are evident without the need for a trusted intermediary. We view
            the emergence of NFTs as a continuation of a paradigm shift from centralized to
            decentralized systems. This framework is now unlocking fresh business models for
            the creators of digital and physical collectibles. Albino is a widely known NFT
            project. The underlying token for each Albino encodes a unique genome that defines
            its appearance, traits, and hereditary lineage. Albino cannot be replicated and
            cannot be transferred without the user's permission.

          </p>

          <p>Everyone in the digital world asserts that NFTs give a public certificate of authenticity
            or proof of ownership, but the legal rights conveyed by an NFT are not always clear.
            The blockchain defines ownership of an NFT as having no inherent legal meaning and
            does not necessarily give copyright, intellectual property rights, or other legal rights
            over the linked digital file. An NFT does not hinder the sharing or copying of its
            associated digital file, nor does it prevent the production of NFTs that reference
            identical files.
          </p>

          <p>First of all, as I always emphasize on this point that is the only all-in-one NFT
            marketplace built for collectors and creators.
          </p>

          <span></span></div>
      </div>

      {/* <!-- Image --> */}

    </div>


  </section >
  {/* </div>
    </div > */}


  <section className="why-choose padding-top-5 padding-bottom-150" id="about">
    <div className="container">

      {/* <!-- Why Choose Us  ROW--> */}
      <div> <img src="images/sandro-katalina-k1bO_VTiZSs-unsplash.jpg" alt="Why Choose Us Image" /> </div>
      <div className="row">
        <div className=" margin-top-60">

          {/* <!-- Tittle --> */}
          <div className="heading margin-bottom-20">

            <h6 className="margin-bottom-10"></h6>

            <h1>ALBINO METAVERSE
            </h1>
          </div>
          <p>Today, “metaverse” is one of the buzziest words in tech, and is being enthusiastically
            embraced by software and game developers across industries ranging from crypto and
            gaming to social media. The metaverse has become a very real phenomenon featuring
            a number of thriving platforms with increasingly extensive crypto integrations.

          </p>
          <p>An Albino metaverse is an immersive virtual world that incorporates blockchain
            technology and cryptocurrency launching its own token. An Albino metaverse is a
            shared, immersive virtual world in which players, usually represented by avatars, can
            interact with each other, construct experiences, and create in-world objects and
            landscapes. Albino Metaverse typically has its own intrinsic economies and currency,
            with which users can buy, sell, and trade digital real estate, items, avatar accessories,
            and more. You can experience the Albino metaverse via a computer, virtual reality (VR)
            headset, or smartphone.

          </p>

          <p>Specifically, an Albino metaverse is a metaverse that incorporates blockchain into its
            underlying technology and crypto assets, such as Albino tokens, into its economy.
            While Albino metaverse-like environments have existed in massive-multiplayer online
            games for some time now, the incorporation of blockchain, crypto, and VR into the
            sector is not just drastically altering who can participate and what they can do, but
            also demonstrating the real-world market value of assets, interactions, and
            experiences earned in the digital realms of blockchain games. Albino Metaverse
            crypto assets and items, such as digital land and NFTs, are typically represented by
            Albino metaverse tokens. Their ownership is recorded on the blockchain and can even
            be exchanged for digital assets.


          </p>



          <span></span></div>
      </div>

      {/* <!-- Image --> */}

    </div>

    {/* <!-- Services ROW --> */}
    <div className="row">

      {/* <!-- Services --> */}
      <div className="col-md-4">

        <div className="ib-info">
          <h4 className="h6">DECENTRALIZATION:
          </h4>
          <p>While early virtual worlds were owned and controlled by companies, Albino metaverses are
            typically decentralized, with some or all components of metaverse games built on blockchain
            technology. This means that Albino metaverses themselves tend to diverge from the mainstream
            business structures and value extraction models of today’s gaming industry. The unique structure of
            the Albino game can open up more equitable engagement opportunities for participants.

          </p>
        </div>
      </div>

      {/* <!-- Services --> */}
      <div className="col-md-4">

        <div className="ib-info">
          <h4 className="h6">USER GOVERNANCE:
          </h4>
          <p>Albino's metaverse like Decentraland makes use of decentralized autonomous organizations (DAOs)
            and governance tokens to help put their users in control of the game’s future, allowing them to
            drive changes and updates through voting. In this way, the Albino metaverse can be more than just
            Albino games; they can grow into entire societies with economies and democratic leadership.

          </p>
        </div>
      </div>

      {/* <!-- Services --> */}
      <div className="col-md-4">

        <div className="ib-info">
          <h4 className="h6">REAL-WORLD ECONOMIC VALUE:</h4>
          <p>Because Albino metaverse uses Albino Tokens and blockchain infrastructure, their economies are
            directly connected to the wider crypto economy. This allows holders of Albino metaverse tokens,
            and VR-Gaming to trade them on DEXs and NFT marketplaces, commanding real-world value for
            their in-world investments.
          </p>
        </div>
      </div>




    </div>


  </section >
  {/* </div>
    </div > */}


  {/* // < !--Why Choose Us-- > */}
  <section className="why-choose padding-top-1 padding-bottom-10" id="about">
    <div className="container">

      {/* <!-- Why Choose Us  ROW--> */}
      <div className="row">
        <div className="col-md-7 margin-top-60">

          {/* <!-- Tittle --> */}
          <div className="heading margin-bottom-20">
            <h1 className="margin-bottom-10"><b>Why Choose Albino?</b></h1>
          </div>

          <h5><b>Open for global participants</b></h5>
          <p>
            Albino can be used by anyone anywhere. An added benefit of the Albino is that
            it’s completely secure and transparent, so it can be used freely across borders.
            The use of technology will facilitate a financial revolution that will leave everyone
            more financially connected, empowered, and enabled in the food industry.

          </p>

          <h5><b>Free from corporate and government interference</b></h5>
          <p>
            Albino transactions have no intermediary institutions or government involvement,
            the costs of transacting are kept very low. Additionally, any transfer happens very
            quickly, eliminating the inconvenience of typical authorization and waiting period
            requirements.

          </p>

          <h5><b>Blockchain compliant</b></h5>
          <p>
            Albino is a Blockchain-compliant token, which means that it supports a few
            functions that all tokens support.
          </p>

          <h5><b>Deflationary Token</b></h5>
          <p>
            The Albino token has a low supply with continuous burns. This reduces overall
            supply and increases the scarcity and value of the remaining token in circulation.
            It is a deflationary asset and is designed to rise in value as time goes on.
          </p>

          <h5><b>Prize Pools</b></h5>
          <p>
            For accurate predictions, there will be an Albino reward for each staking pool.
            These, too, will change over time depending on the community's consensus.
          </p>


          <h5><b>Transparency & Immutability</b></h5>
          <p>
            With Albino, each time an exchange of tokens is recorded on the blockchain, an
            audit trail is present to trace where the token came from. This can not only help
            improve security and prevent fraud in exchange-related businesses, but it can also
            help verify the authenticity of the traded assets.


          </p>

          <h5><b>Lower Fees and Security</b></h5>
          <p>
            The fees associated with Albino transactions are far less than those associated
            with debit, credit cards as well as wire transfers, and BACS payments.

          </p>

          <h5><b>Transaction Traceability</b></h5>
          <p>
            Because each new transaction is encrypted and linked to the preceding
            transaction, Albino is significantly more secure than other record-keeping
            systems. Albino is made up of a complex string of mathematical numbers and
            cannot be changed.
          </p>

          <h5><b>Ease of use</b></h5>
          <p>
            Ease of use is the reason why Albino has more value. All you need is a smart
            device and an internet connection. Investors can easily earn rewards by ordering
            their favorite meals or staking their Little Pony.
          </p>

          <h5><b>Safe & Secure</b></h5>
          <p>
            Albino is a safe and secure platform that is audited and our technical team is
            continuously improving the security of the system to ensure the safety of the
            platform.
          </p>




          <span></span></div>
      </div>

      {/* <!-- Image --> */}
      <div className="col-md-5 text-right"> <img src="images/simone-secci-49uySSA678U-unsplash.jpg"
        alt="Why Choose Us Image" /> </div>
    </div>




  </section >
  {/* </div>
    </div > */}



  {/* // < !--Token Distribution-- > */}
  <section className="distri drk padding-top-150 padding-bottom-150 " id="token">
    <div className="container">
      <div className="row">

        {/* <!-- Token  --> */}
        <div className="col-lg-7">
          <h3>TOKENOMICS</h3>
          <p>Token Distribution</p>

          {/* <!-- Progress --> */}
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0"
              aria-valuemax="150"><span>9,000,000 <small>50%</small></span> </div>
          </div>
          <div className="row">
            <div className="col">
              <h6> Now Distribution</h6>
              <span>2,000,000</span>
            </div>
            <div className="col">
              <h6> 99,910</h6>
              <span>ETH Received</span>
            </div>
            <div className="col">
              <h6> 99,910</h6>
              <span>BTC Received</span>
            </div>
          </div>

          {/* <!-- CountdownEnd --> */}
          <div className="countdown">
            <h6>Current Distribution Section End 150/350</h6>
            {/* <!-- Countdown--> */}
            <ul className="row">
              {/* <!-- Days --> */}


              <li className="col-md-3">
                <article><span className="seconds">5%</span>
                  <p className="seconds_ref">ABO Advisory Board</p>
                </article>
              </li>
              {/* <!-- Hours --> */}

              {/* <!-- Mintes --> */}

              {/* <!-- Seconds --> */}

              <li className="col-md-3">
                <article><span className="seconds">10%</span>
                  <p className="seconds_ref">Management</p>
                </article>
              </li>

              <li className="col-md-3">
                <article><span className="seconds">20%</span>
                  <p className="seconds_ref">Private sale</p>
                </article>
              </li>
              <li className="col-md-3">
                <article><span className="minutes">15%</span>
                  <p className="minutes_ref">Developer Testnet</p>
                </article>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Total Distribution --> */}
        <div className="col-lg-5">
          <h3>Distribution Section </h3>
          <p>ICO Crypto token will be released on the basis of Ethereum and Bitocin platform.</p>
          <div className="countdown-all">

            {/* <!-- Countdown --> */}
            <ul className="row">
              {/* <!-- Days --> */}
              <li className="col-md-3">
                <article> <span className="days">20%</span>
                  <p className="days_ref">Marketing</p>
                </article>
              </li>
              {/* <!-- Hours --> */}
              <li className="col-md-3">
                <article> <span className="hours">10%</span>
                  <p className="hours_ref">Airdrop</p>
                </article>
              </li>
              {/* <!-- Mintes --> */}
              <li className="col-md-3">
                <article><span className="seconds">20%</span>
                  <p className="seconds_ref">Staking</p>
                </article>
              </li>
              {/* <!-- Seconds --> */}

            </ul>
            <a href="#." className="btn">Join Us</a> <a href="#." className="btn btn-inverse">Buy Now</a>

            {/* <!-- Buy Option --> */}
            <div className="card-info"> <i className="fab  fa-bitcoin"></i> <i className="fab  fa-cc-discover"></i> <i
                className="fab  fa-cc-visa"></i> <i className="fab  fa-cc-mastercard"></i> </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  {/* <!--ABOUT --> */}


  {/* // < !--Road Map-- > */}
  <section className="road-map padding-top-150 padding-bottom-50" id="roadmap">
    <div className="container-fluid">
      <h2>Our Main Road Map</h2>
      <p></p>

      {/* <!-- Road List --> */}
      <ul className="edu-list margin-top-50">

        {/* <!-- Jan 2018 --> */}
        <li> <span>Phase 1</span>
          <p>-Community start</p>
          <p>-Influencer launch
            marketing</p>
          <p>-Website launch</p>
          <p>-Contract development</p>
          <p>-2500 Telegram members</p>
          <p>-preparing Phase 2
            marketing plan</p>
        </li>
        {/* <!-- Feb 2018 --> */}
        <li> <span>Phase 2</span>
          <p>-Implementation of Staking/
            Farming</p>
          <p>-Implementation of NFTs</p>
          <p>-Exchange Implementation</p>
          <p>-Coingecko listing</p>
          <p>-CoinMarketCap listing</p>
          <p>-Influencer offensive</p>
          <p>-Community contests</p>
          <p>-CEX listing</p>
          <p>-10,000 Telegram
            members/holders</p>
          <p>-Contract Audit</p>
          <p>-Preparing phase 3 marketing plan</p>
        </li>
        {/* <!-- March 2018 --> */}
        <li> <span>Phase 3</span>
          <p>-Major CEX listing</p>
          <p>-Influencer offensive part 2</p>
          <p>-100,000 Telegram
            members/holders</p>
          <p>-Staking and farming</p>
          <p>-Launch NFT contract for Art
            collections</p>
          <p>-Bridging between Ethereum,
            Binance, and Polygon</p>
        </li>

      </ul>
    </div>
  </section>




  <section className="community-sec padding-top-15 padding-bottom-15">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="sm-intro">
            <h2>Join our community</h2>
            <ul className="socials">
              <li><a href="https://www.facebook.com/Albino-NFT-Gaming-Market-103559575727015 "><i
                    className="fab fa-facebook-f"></i></a></li>
              <li><a href=" https://twitter.com/ALBINOTOKENS"><i className="fab fa-twitter"></i></a></li>

              <li><a href="https://medium.com/@AlbinosNFTGamingMarket"><i className="fab fa-medium"></i></a></li>
              <li><a href="https://www.reddit.com/user/Albino_Group"><i className="fab fa-reddit"></i></a></li>
              <li><a href="https://www.instagram.com/albinonftgaming/"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/albino-nft-gaming-3402ba243/"><i className="fab fa-linkedin"></i></a>
              </li>
              <li><a href="https://www.youtube.com/channel/UCE8ba8fKlJ2KpCCKEi4F9Xg"><i className="fab fa-youtube"></i></a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <p>© 2022 bRd digitech</p>
          </div>
        </div>
        <div className="col">

        </div>
      </div>
    </div>
  </section>
  {/* </div > */}



  {/* </div > */}
    </>
  )
}

export default HeaderComponent