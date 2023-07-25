const handleFP = (req, res, db, bcrypt) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(402).json('incorrect form submission');
    }

    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {

        trx.where('email', '=', email)
        .update({
          hash : hash
        })
        .into('login')
        .returning('email')
        // .then(loginEmail => {
        //   return trx('users')
        //     .returning('*')
        //     .update({
        //       email: loginEmail[0].email,
              
        //       hash : hash
        //     })
        //     .then(user => {
        //       res.json(user[0]);
        //     })
        // })
        .then(trx.commit)
        .catch(trx.rollback)
      })
      .catch(err => res.status(401).json('unable to update'))
  }
  
  module.exports = {
    handleFP: handleFP
  };
