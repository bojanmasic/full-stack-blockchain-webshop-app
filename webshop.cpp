#include "webshop.hpp"

void webshop::signup(inery::name username, const std::string password_hash, const std::string phone, const std::string email, 
                                  const std::string name, const std::string address, const std::string role)
{

require_auth(get_self()); 
//autentifikacija 
users_t users (get_self(), get_self().value);
//user stavljamo umesto auto, ako ne znamo tip koristimo auto
users.emplace(get_self(), [&](user &user){
user.username=username;
user.password_hash=password_hash;
user.name=name;
user.phone=phone;
user.email=email;
user.address=address;
user.role=role;
});


}