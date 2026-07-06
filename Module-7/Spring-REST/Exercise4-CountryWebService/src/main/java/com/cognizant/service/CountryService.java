package com.cognizant.service;

import com.cognizant.model.Country;
import com.cognizant.exception.CountryNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {
    private List<Country> countries;

    public CountryService() {
        countries = new ArrayList<>();
        countries.add(new Country("IN", "India"));
        countries.add(new Country("US", "United States of America"));
        countries.add(new Country("UK", "United Kingdom"));
        countries.add(new Country("JP", "Japan"));
    }

    public Country getCountry() {
        return countries.get(0);
    }
    
    public List<Country> getAllCountries() {
        return countries;
    }
    
    public Country getCountryByCode(String code) {
        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(() -> new CountryNotFoundException("Country not found"));
    }
}
