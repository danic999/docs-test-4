
```csharp title='Example Response - Response 200'
{
  "traceId": "string",
  "finishTime": "2019-08-24T14:15:22Z",
  "startTime": "2019-08-24T14:15:22Z",
  "version": {
    "apiVersion": "string",
    "coreVersion": "string"
  },
  "data": {
    "processingStatus": "NOT_AVAILABLE",
    "overallFraudCheck": {
      "performedChecks": 0,
      "result": {
        "result": "NOT_PERFORMED",
        "certaintyLevel": "NOT_PERFORMED"
      }
    },
    "dataCheck": {
      "overall": {
        "result": "NOT_PERFORMED",
        "certaintyLevel": "NOT_PERFORMED"
      },
      "matchCheck": {
        "overall": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        },
        "firstNameMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "lastNameMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "fullNameMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "addressMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "placeOfBirthMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "raceMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "religionMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "professionMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "maritalStatusMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "residentialStatusMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "employerMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "dateOfBirthMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "dateOfIssueMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "dateOfExpiryMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "documentNumberMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "personalIdNumberMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "documentAdditionalNumberMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "documentOptionalAdditionalNumberMatch": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        }
      },
      "logicCheck": {
        "overall": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        },
        "dateLogicCheck": {
          "overall": "NOT_PERFORMED",
          "dateOfBirthBeforeDateOfIssueCheck": "NOT_PERFORMED",
          "dateOfBirthBeforeDateOfExpiryCheck": "NOT_PERFORMED",
          "dateOfIssueBeforeDateOfExpiryCheck": "NOT_PERFORMED",
          "dateOfBirthInPastCheck": "NOT_PERFORMED",
          "dateOfIssueInPastCheck": "NOT_PERFORMED"
        },
        "mrzCheck": {
          "overall": "NOT_PERFORMED",
          "parsed": "NOT_PERFORMED",
          "checkDigits": "NOT_PERFORMED"
        },
        "documentNumberLogic": {
          "overall": "NOT_PERFORMED"
        },
        "personalIdNumberLogic": {
          "overall": "NOT_PERFORMED"
        }
      },
      "formatCheck": {
        "overall": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        },
        "dateOfBirthCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "dateOfExpiryCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "dateOfIssueCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "documentNumberCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "documentAdditionalNumberCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "documentOptionalAdditionalNumberCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "personalIdNumberCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "additionalPersonalIdNumberCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "sexCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "nationalityCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "issuingAuthorityCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "maritalStatusCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "religionCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "classEffectiveDateCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        },
        "classExpiryDateCheck": {
          "type": "FIRST_NAME",
          "check": {
            "result": "NOT_PERFORMED",
            "certaintyLevel": "NOT_PERFORMED"
          }
        }
      },
      "barcodeAnomalyCheck": {
        "overall": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        }
      },
      "suspiciousDataCheck": {
        "overall": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        },
        "sampleStringCheck": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        },
        "suspiciousNumberCheck": {
          "result": "NOT_PERFORMED",
          "certaintyLevel": "NOT_PERFORMED"
        }
      },
      "dataIntegrityCheck": "NOT_PERFORMED"
    },
    "documentLivenessCheck": {
      "overall": "NOT_PERFORMED",
      "screenCheck": {
        "result": "NOT_PERFORMED",
        "matchLevel": "DISABLED",
        "satisfiedMatchLevel": "DISABLED"
      },
      "photocopyCheck": {
        "result": "NOT_PERFORMED",
        "matchLevel": "DISABLED",
        "satisfiedMatchLevel": "DISABLED"
      },
      "handPresenceCheck": "NOT_PERFORMED"
    },
    "visualCheck": {
      "overall": "NOT_PERFORMED",
      "photoForgeryCheck": "NOT_PERFORMED",
      "securityFeatures": {
        "processingStatus": "NOT_PERFORMED",
        "segmentResult": [
          {
            "rectangleF": {
              "x": 0.1,
              "y": 0.1,
              "width": 0.1,
              "height": 0.1
            },
            "checkResult": "NOT_PERFORMED"
          }
        ],
        "fullDocumentImageBase64": "string",
        "score": 0.1,
        "overall": "NOT_PERFORMED"
      }
    },
    "documentValidityCheck": {
      "expiredCheck": "NOT_PERFORMED",
      "versionCheck": "NOT_PERFORMED"
    },
    "imageQualityCheck": {
      "blurCheck": "NOT_PERFORMED"
    },
    "extractionResult": {
      "firstName": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "lastName": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "fullName": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "address": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "dateOfIssue": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "filledByDomainKnowledge": true,
        "originalString": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        }
      },
      "dateOfExpiry": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "filledByDomainKnowledge": true,
        "originalString": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        }
      },
      "documentNumber": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "sex": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "driverLicenseDetailedInfo": {
        "restrictions": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "endorsements": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "vehicleClass": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "conditions": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "vehicleClassesInfo": [
          {
            "vehicleClass": {
              "latin": "string",
              "latinLocation": {
                "topLeftCorner": {
                  "x": 0.1,
                  "y": 0.1
                },
                "dimensions": {
                  "width": 0.1,
                  "height": 0.1
                },
                "side": "SIDE_FRONT"
              },
              "cyrillic": "string",
              "cyrillicLocation": {
                "topLeftCorner": {
                  "x": 0.1,
                  "y": 0.1
                },
                "dimensions": {
                  "width": 0.1,
                  "height": 0.1
                },
                "side": "SIDE_FRONT"
              },
              "arabic": "string",
              "arabicLocation": {
                "topLeftCorner": {
                  "x": 0.1,
                  "y": 0.1
                },
                "dimensions": {
                  "width": 0.1,
                  "height": 0.1
                },
                "side": "SIDE_FRONT"
              }
            },
            "licenceType": {
              "latin": "string",
              "latinLocation": {
                "topLeftCorner": {
                  "x": 0.1,
                  "y": 0.1
                },
                "dimensions": {
                  "width": 0.1,
                  "height": 0.1
                },
                "side": "SIDE_FRONT"
              },
              "cyrillic": "string",
              "cyrillicLocation": {
                "topLeftCorner": {
                  "x": 0.1,
                  "y": 0.1
                },
                "dimensions": {
                  "width": 0.1,
                  "height": 0.1
                },
                "side": "SIDE_FRONT"
              },
              "arabic": "string",
              "arabicLocation": {
                "topLeftCorner": {
                  "x": 0.1,
                  "y": 0.1
                },
                "dimensions": {
                  "width": 0.1,
                  "height": 0.1
                },
                "side": "SIDE_FRONT"
              }
            },
            "effectiveDate": {
              "day": 0,
              "month": 0,
              "year": 0,
              "successfullyParsed": true,
              "filledByDomainKnowledge": true,
              "originalString": {
                "latin": "string",
                "latinLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "cyrillic": "string",
                "cyrillicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "arabic": "string",
                "arabicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                }
              }
            },
            "expiryDate": {
              "day": 0,
              "month": 0,
              "year": 0,
              "successfullyParsed": true,
              "filledByDomainKnowledge": true,
              "originalString": {
                "latin": "string",
                "latinLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "cyrillic": "string",
                "cyrillicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "arabic": "string",
                "arabicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                }
              }
            }
          }
        ]
      },
      "fullDocumentFrontImageBase64": "string",
      "fullDocumentBackImageBase64": "string",
      "faceImageBase64": "string",
      "faceImageLocation": {
        "topLeftCorner": {
          "x": 0.1,
          "y": 0.1
        },
        "dimensions": {
          "width": 0.1,
          "height": 0.1
        },
        "side": "SIDE_FRONT"
      },
      "additionalNameInformation": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "additionalAddressInformation": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "additionalOptionalAddressInformation": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "placeOfBirth": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "nationality": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "race": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "religion": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "profession": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "maritalStatus": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "residentialStatus": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "employer": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "personalIdNumber": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "documentAdditionalNumber": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "documentOptionalAdditionalNumber": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "issuingAuthority": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "mrzData": {
        "rawMrzString": "string",
        "documentCode": "string",
        "issuer": "string",
        "documentNumber": "string",
        "opt1": "string",
        "opt2": "string",
        "gender": "string",
        "nationality": "string",
        "primaryId": "string",
        "secondaryId": "string",
        "alienNumber": "string",
        "applicationReceiptNumber": "string",
        "immigrantCaseNumber": "string",
        "mrzVerified": true,
        "mrzParsed": true,
        "dateOfBirth": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": "string"
        },
        "dateOfExpiry": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": "string"
        },
        "documentType": "UNKNOWN",
        "issuerName": "string",
        "nationalityName": "string"
      },
      "localizedName": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "dataMatchResult": {
        "dateOfBirth": "NOT_PERFORMED",
        "dateOfExpiry": "NOT_PERFORMED",
        "documentNumber": "NOT_PERFORMED",
        "documentAdditionalNumber": "NOT_PERFORMED",
        "documentOptionalAdditionalNumber": "NOT_PERFORMED",
        "personalIdNumber": "NOT_PERFORMED",
        "dataMatchResult": "NOT_PERFORMED"
      },
      "dateOfExpiryPermanent": true,
      "scanningFirstSideDone": true,
      "additionalPersonalIdNumber": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "frontViz": {
        "firstName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "lastName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "fullName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalNameInformation": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "localizedName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "address": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalAddressInformation": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalOptionalAddressInformation": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "placeOfBirth": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "nationality": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "race": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "religion": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "profession": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "maritalStatus": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "residentialStatus": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "employer": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "sex": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "dateOfBirth": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          }
        },
        "dateOfIssue": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          }
        },
        "dateOfExpiry": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          }
        },
        "dateOfExpiryPermanent": true,
        "documentNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "personalIdNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "documentAdditionalNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalPersonalIdNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "documentOptionalAdditionalNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "issuingAuthority": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "fathersName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "mothersName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "bloodType": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "sponsor": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "driverLicenseDetailedInfo": {
          "restrictions": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "endorsements": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "vehicleClass": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "conditions": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "vehicleClassesInfo": [
            {
              "vehicleClass": {
                "latin": "string",
                "latinLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "cyrillic": "string",
                "cyrillicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "arabic": "string",
                "arabicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                }
              },
              "licenceType": {
                "latin": "string",
                "latinLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "cyrillic": "string",
                "cyrillicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "arabic": "string",
                "arabicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                }
              },
              "effectiveDate": {
                "day": 0,
                "month": 0,
                "year": 0,
                "successfullyParsed": true,
                "filledByDomainKnowledge": true,
                "originalString": {
                  "latin": "string",
                  "latinLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "cyrillic": "string",
                  "cyrillicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "arabic": "string",
                  "arabicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  }
                }
              },
              "expiryDate": {
                "day": 0,
                "month": 0,
                "year": 0,
                "successfullyParsed": true,
                "filledByDomainKnowledge": true,
                "originalString": {
                  "latin": "string",
                  "latinLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "cyrillic": "string",
                  "cyrillicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "arabic": "string",
                  "arabicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  }
                }
              }
            }
          ]
        }
      },
      "backViz": {
        "firstName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "lastName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "fullName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalNameInformation": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "localizedName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "address": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalAddressInformation": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalOptionalAddressInformation": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "placeOfBirth": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "nationality": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "race": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "religion": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "profession": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "maritalStatus": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "residentialStatus": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "employer": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "sex": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "dateOfBirth": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          }
        },
        "dateOfIssue": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          }
        },
        "dateOfExpiry": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          }
        },
        "dateOfExpiryPermanent": true,
        "documentNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "personalIdNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "documentAdditionalNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "additionalPersonalIdNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "documentOptionalAdditionalNumber": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "issuingAuthority": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "fathersName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "mothersName": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "bloodType": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "sponsor": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        },
        "driverLicenseDetailedInfo": {
          "restrictions": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "endorsements": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "vehicleClass": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "conditions": {
            "latin": "string",
            "latinLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "cyrillic": "string",
            "cyrillicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            },
            "arabic": "string",
            "arabicLocation": {
              "topLeftCorner": {
                "x": 0.1,
                "y": 0.1
              },
              "dimensions": {
                "width": 0.1,
                "height": 0.1
              },
              "side": "SIDE_FRONT"
            }
          },
          "vehicleClassesInfo": [
            {
              "vehicleClass": {
                "latin": "string",
                "latinLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "cyrillic": "string",
                "cyrillicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "arabic": "string",
                "arabicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                }
              },
              "licenceType": {
                "latin": "string",
                "latinLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "cyrillic": "string",
                "cyrillicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                },
                "arabic": "string",
                "arabicLocation": {
                  "topLeftCorner": {
                    "x": 0.1,
                    "y": 0.1
                  },
                  "dimensions": {
                    "width": 0.1,
                    "height": 0.1
                  },
                  "side": "SIDE_FRONT"
                }
              },
              "effectiveDate": {
                "day": 0,
                "month": 0,
                "year": 0,
                "successfullyParsed": true,
                "filledByDomainKnowledge": true,
                "originalString": {
                  "latin": "string",
                  "latinLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "cyrillic": "string",
                  "cyrillicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "arabic": "string",
                  "arabicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  }
                }
              },
              "expiryDate": {
                "day": 0,
                "month": 0,
                "year": 0,
                "successfullyParsed": true,
                "filledByDomainKnowledge": true,
                "originalString": {
                  "latin": "string",
                  "latinLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "cyrillic": "string",
                  "cyrillicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  },
                  "arabic": "string",
                  "arabicLocation": {
                    "topLeftCorner": {},
                    "dimensions": {},
                    "side": "SIDE_FRONT"
                  }
                }
              }
            }
          ]
        }
      },
      "barcode": {
        "rawDataBase64": "string",
        "stringData": "string",
        "firstName": "string",
        "lastName": "string",
        "middleName": "string",
        "fullName": "string",
        "additionalNameInformation": "string",
        "address": "string",
        "placeOfBirth": "string",
        "nationality": "string",
        "race": "string",
        "religion": "string",
        "profession": "string",
        "maritalStatus": "string",
        "residentialStatus": "string",
        "employer": "string",
        "sex": "string",
        "dateOfBirth": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": "string"
        },
        "dateOfIssue": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": "string"
        },
        "dateOfExpiry": {
          "day": 0,
          "month": 0,
          "year": 0,
          "successfullyParsed": true,
          "filledByDomainKnowledge": true,
          "originalString": "string"
        },
        "documentNumber": "string",
        "personalIdNumber": "string",
        "documentAdditionalNumber": "string",
        "issuingAuthority": "string",
        "addressDetailedInfo": {
          "street": "string",
          "postalCode": "string",
          "city": "string",
          "jurisdiction": "string"
        },
        "driverLicenseDetailedInfo": {
          "restrictions": "string",
          "endorsements": "string",
          "vehicleClass": "string",
          "conditions": "string",
          "vehicleClassesInfo": [
            {
              "vehicleClass": "string",
              "licenceType": "string",
              "effectiveDate": {
                "day": 0,
                "month": 0,
                "year": 0,
                "successfullyParsed": true,
                "filledByDomainKnowledge": true,
                "originalString": "string"
              },
              "expiryDate": {
                "day": 0,
                "month": 0,
                "year": 0,
                "successfullyParsed": true,
                "filledByDomainKnowledge": true,
                "originalString": "string"
              }
            }
          ]
        },
        "extendedElements": [
          {
            "key": "BARCODE_ELEMENT_KEY_DOCUMENT_TYPE",
            "value": "string"
          }
        ]
      },
      "frontImageAnalysisResult": {
        "blurred": true,
        "documentImageColorStatus": "NOT_AVAILABLE",
        "documentImageMoireStatus": "NOT_AVAILABLE",
        "faceDetectionStatus": "NOT_AVAILABLE",
        "mrzDetectionStatus": "NOT_AVAILABLE",
        "barcodeDetectionStatus": "NOT_AVAILABLE",
        "cardOrientation": "HORIZONTAL",
        "cardRotation": "ZERO"
      },
      "backImageAnalysisResult": {
        "blurred": true,
        "documentImageColorStatus": "NOT_AVAILABLE",
        "documentImageMoireStatus": "NOT_AVAILABLE",
        "faceDetectionStatus": "NOT_AVAILABLE",
        "mrzDetectionStatus": "NOT_AVAILABLE",
        "barcodeDetectionStatus": "NOT_AVAILABLE",
        "cardOrientation": "HORIZONTAL",
        "cardRotation": "ZERO"
      },
      "processingStatus": "SUCCESS",
      "frontProcessingStatus": "SUCCESS",
      "backProcessingStatus": "SUCCESS",
      "recognitionMode": "NONE",
      "signatureImageBase64": "string",
      "dateOfBirth": {
        "day": 0,
        "month": 0,
        "year": 0,
        "successfullyParsed": true,
        "filledByDomainKnowledge": true,
        "originalString": {
          "latin": "string",
          "latinLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "cyrillic": "string",
          "cyrillicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          },
          "arabic": "string",
          "arabicLocation": {
            "topLeftCorner": {
              "x": 0.1,
              "y": 0.1
            },
            "dimensions": {
              "width": 0.1,
              "height": 0.1
            },
            "side": "SIDE_FRONT"
          }
        }
      },
      "classInfo": {
        "country": "COUNTRY_NONE",
        "region": "REGION_NONE",
        "type": "TYPE_NONE",
        "countryName": "string",
        "isoAlpha3CountryCode": "string",
        "isoAlpha2CountryCode": "string",
        "isoNumericCountryCode": "string"
      },
      "recognitionStatus": "EMPTY",
      "fathersName": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "mothersName": {
        "latin": "string",
        "latinLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "cyrillic": "string",
        "cyrillicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        },
        "arabic": "string",
        "arabicLocation": {
          "topLeftCorner": {
            "x": 0.1,
            "y": 0.1
          },
          "dimensions": {
            "width": 0.1,
            "height": 0.1
          },
          "side": "SIDE_FRONT"
        }
      },
      "frontAdditionalProcessingInfo": {
        "missingMandatoryFields": [
          "ADDITIONAL_ADDRESS_INFORMATION"
        ],
        "invalidCharacterFields": [
          "ADDITIONAL_ADDRESS_INFORMATION"
        ],
        "extraPresentFields": [
          "ADDITIONAL_ADDRESS_INFORMATION"
        ]
      },
      "backAdditionalProcessingInfo": {
        "missingMandatoryFields": [
          "ADDITIONAL_ADDRESS_INFORMATION"
        ],
        "invalidCharacterFields": [
          "ADDITIONAL_ADDRESS_INFORMATION"
        ],
        "extraPresentFields": [
          "ADDITIONAL_ADDRESS_INFORMATION"
        ]
      },
      "isBelowAgeLimit": true,
      "age": 0
    },
    "recognitionStatus": "EMPTY"
  },
  "executionId": "string"
}
```