package com.EduBridge;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class RegistrationService {
	@Autowired
	RegistrationRepository pr;	
public RegistrationService() {	
}
public List getAllPlayers() {
	return pr.findAll();
}
//public PlayersModel getPlayerById(int id) {
//	return pr.getById(id);	
//}
public RegistrationModel getPlayerById(int id) {
	
	Optional<RegistrationModel> pm=pr.findById(id);//inbuild DOA layer
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get() ;
            
	}else 
	return null;
}
public void saveData(RegistrationModel p) {
	pr.save(p);
}
public void updateData(RegistrationModel p1) {
	pr.save(p1);
}
public void removePlayer(RegistrationModel p) {
	int id=p.getId();
	RegistrationModel q=pr.getById(id);
	pr.delete(q);
}
public void usernamelogin(RegistrationModel u) {
	pr.save(u);
}
public void passwordlogin(RegistrationModel p) {
	pr.save(p);
}
}
	