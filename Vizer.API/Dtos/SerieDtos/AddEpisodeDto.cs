﻿using Vizer.API.Entities;
using Vizer.API.ValueObjects;

namespace Vizer.API.Dtos.SerieDtos;

public class AddEpisodeDto
{
  public string IdSerie { get; set; } = string.Empty;
  public string Title { get; set; } = string.Empty;
  public string Banner { get; set; } = string.Empty;
  public string Poster { get; set; } = string.Empty;
  public string ReleaseYear { get; set; } = string.Empty;
  public int ParentalRating { get; set; }
  public int Episode {  get; set; }
  public int Season { get; set; }
  public Video? Video { get; set; }

  public Episode GetEpisode()
  {
    return new Episode
    {
      Title = Title,
      Video = Video,
      Season = Season,
      Banner = Banner,
      Poster = Poster,
      Number = Episode,
      ReleaseYear = ReleaseYear,
      ParentalRating = ParentalRating
    };
  }
}
