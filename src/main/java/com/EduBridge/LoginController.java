package com.EduBridge;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController {
	@Autowired
	LoginService ps;
	@GetMapping("view")
	public List<LoginModel> getAllRecords(){
		return ps.getAllPlayers();
				
	}

	@PostMapping("viewI")
	public LoginModel getPlayer(@RequestBody LoginModel id) {
	int id1=id.getId();
	return ps.getPlayerById(id1);
    }

	@PostMapping("insert")
	public void addPlayer(@RequestBody LoginModel p){
		this.ps.saveData(p);
	}
	@PostMapping("update")
	public void modifyPlayer(@RequestBody LoginModel p1) {
		this.ps.updateData(p1);
	}

	@PostMapping("delete")
	public void deletePlayer(@RequestBody LoginModel p1 ) {
		this.ps.removePlayer(p1);
	}


}
