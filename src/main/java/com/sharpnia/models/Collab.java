package com.sharpnia.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "collaborations")
@Data
public class Collab {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public String getWebsite() {
        return Website;
    }

    public void setWebsite(String website) {
        Website = website;
    }

    public String getInstagramHandle() {
        return InstagramHandle;
    }

    public void setInstagramHandle(String instagramHandle) {
        InstagramHandle = instagramHandle;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
    }

    private String Name;
    private String Description;
    private String Website;
    private String InstagramHandle;
    private String logoUrl;
}
