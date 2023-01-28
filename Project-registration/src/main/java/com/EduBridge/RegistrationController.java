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
public class RegistrationController {
	
		@Autowired
		RegistrationService ps;
		@GetMapping("view")
		public List<RegistrationModel> getAllRecords(){
			return ps.getAllPlayers();
					
		}

		@PostMapping("viewI")
		public RegistrationModel getPlayer(@RequestBody RegistrationModel id) {
		int id1=id.getId();
		return ps.getPlayerById(id1);
	    }

		@PostMapping("insert")
		public void addPlayer(@RequestBody RegistrationModel p){
			System.out.println("i am in controller class");
			this.ps.saveData(p);
		}
		@PostMapping("update")
		public void modifyPlayer(@RequestBody RegistrationModel p1) {
			this.ps.updateData(p1);
		}

		@PostMapping("delete")
		public void deletePlayer(@RequestBody RegistrationModel p1 ) {
			this.ps.removePlayer(p1);
		}
}
