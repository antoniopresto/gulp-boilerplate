'use strict';

let LoginForm = React.createClass({
  render(){
    return(
      <div className="f-row middle-xs fluid">
        <div className="col-xs-12">
          <div className="ui middle aligned center aligned grid">
            <div className="column max-500">
              <form id="login-form" className="ui large form">
                <div className="ui segment">
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="user icon"></i>
                      <input type="text" name="email" placeholder="E-mail" />
                    </div>
                  </div>
                  <div className="field">
                    <div className="ui left icon input">
                      <i className="lock icon"></i>
                      <input type="password" name="password" placeholder="Senha" />
                    </div>
                  </div>
                  <div className="ui fluid large orange submit button">Entrar</div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    );
  }
});



let Footer = React.createClass({
  render(){
    return(
      <div className="f-row bottom-xs fluid">
        <div className="col-xs-12">
          <div className="ui seven stackable center aligned column grid">
            <div className="two wide column">
              <a href="">
                <img src="assets/white-logo.png" /> ©
                <span className="ano"></span>
              </a>
            </div>

            <div className="two wide column">
              <a href="http://olggeo.com.br/faq/">Como Funciona</a>
            </div>

            <div className="two wide column">
              <a href="http://www.olggeo.com.br/">Sobre Nós</a>
            </div>

            <div className="two wide column">
              <a href="#">Termos</a>
            </div>

            <div className="two wide column">
              <a href="http://focopremium.com/">Premium</a>
            </div>

            <div className="two wide column">
              <a href="#">Blog</a>
            </div>

            <div className="column">
              <a href="/site/contact">Contato</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});



let MainApp = React.createClass({
  render(){
    return(
      <div className="f-row">
        <LoginForm />
        <Footer />
      </div>
    );
  }
});

module.exports = MainApp;
