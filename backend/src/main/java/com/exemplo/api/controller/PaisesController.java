package com.exemplo.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.io.IOException;
import java.lang.InterruptedException;

@RestController
@RequestMapping("/api")
public class PaisesController {
    HttpClient client = HttpClient.newHttpClient();

    @GetMapping("/paises")
    public Map<String, String> getAll() {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.restcountries.com/countries/v5?response_fields=names.common,codes.alpha_2"))
                    .header("Authorization", "Bearer rc_live_ded49a16134a491788100afc221e6202")
                    .GET()
                    .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            // return response.statusCode() == 200
            //         ? Map.of("data", response.body())
            //         : Map.of("error", "Failed to fetch data from external API");
            Map<String, String> result = new HashMap<>();
            result.put("data", response.body());
            return result;
        } catch (IOException | InterruptedException e) {
            // e.printStackTrace();
            return Map.of("error", "An error occurred while fetching data: " + e.getMessage());
        }
    }
}
