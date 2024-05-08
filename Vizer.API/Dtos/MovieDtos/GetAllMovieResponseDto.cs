﻿using Vizer.API.Entities;

namespace Vizer.API.Dtos.MovieDtos;

public class GetAllMovieResponseDto
{
  public string Id { get; set; } = string.Empty;
  public string Title { get; set; } = string.Empty;
  public DateTime? DateCreated { get; set; }

  public static GetAllMovieResponseDto ToEntity(Movie movie)
  {
    return new GetAllMovieResponseDto
    {
      Id = movie.Id,
      Title = movie.Title,
      DateCreated = movie.CreateAt
    };
  }
}
