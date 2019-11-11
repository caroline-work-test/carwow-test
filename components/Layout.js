
function Layout(props) {
    return (
      <div className="page-layout">
        {props.children}
        <style jsx global>{`
        body {
          background-color: #F6F6F6;
          font-family: "Arial", sans-serif;
          margin: 0;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        ol {
          list-style-type: none;
          display: inline-block;
        }
        ul {
          padding-left: 0;
        }
        .CarHeader_Title,
        .CarHeader_Description {
          text-align: center;
        }
        .CarHeader_Title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          color: #00A4FF;
        }
        .Rating_Number {
          display: inline-block;
          margin: 0;
          padding-bottom: 5px;
          vertical-align: 2px;;
        }
        .Rating_Star {
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url(assets/star.svg);
          background-size: 20px 20px;
          background-repeat: no-repeat;
          padding-right: 3px;
        }
      `}</style>
      </div>
    )
  }
  
  export default Layout