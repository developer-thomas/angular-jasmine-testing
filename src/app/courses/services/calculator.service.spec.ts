import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: loggerSpy,
        },
      ],
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it("Should add two numbers", () => {
    const result = calculator.add(2, 2);
    expect(result).toBe(4, "Unexpected result of sum operation");
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("Should subtract two numbers", () => {
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0, "Unexpected result of subtract operation");
    // expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
