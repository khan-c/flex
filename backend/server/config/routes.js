import path from 'path';

export default (app, passport) => {
  app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/login.html'));
  });

  app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../frontend/signup.html'));
  });

  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile.html');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/auth/google',
    passport.authenticate(
      'google', {
        scope: ['profile', 'email']
      }
    )
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate(
      'google', {
        successRedirect: '/profile',
        failureRedirect: '/'
      }
    )
  );



};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}
