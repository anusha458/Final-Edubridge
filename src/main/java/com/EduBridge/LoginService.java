package com.EduBridge;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LoginService {
	@Autowired
	LoginRepository pr;	
public LoginService() {	
}
public List getAllPlayers() {
	return pr.findAll();
}
//public PlayersModel getPlayerById(int id) {
//	return pr.getById(id);	
//}
public LoginModel getPlayerById(int id) {
	
	Optional<LoginModel> pm=pr.findById(id);//inbuild DOA layer
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get() ;
            
	}else 
	return null;
}
public void saveData(LoginModel p) {
	pr.save(p);
}
public void updateData(LoginModel p1) {
	pr.save(p1);
}
public void removePlayer(LoginModel p) {
	int id=p.getId();
	LoginModel q=pr.getById(id);
	pr.delete(q);
}
public void usernamelogin(LoginModel u) {
	pr.save(u);
}
public void passwordlogin(LoginModel p) {
	pr.save(p);
}
}
