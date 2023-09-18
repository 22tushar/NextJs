import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../Persons.js";
import { Box } from "@chakra-ui/react";
const schema = z.object({
  date: z.string().min(3, { message: "Please Enter Atleast Three Characters" }),
  hours: z
    .number({ invalid_type_error: "Amount field is Required" })
    .min(0.01, { message: "Amount shold be equal or greater than 1" })
    .max(100_000),
  person: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});
interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <Box ml="2vh" mt="2vh">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data), reset();
        })}
      >
        {" "}
        <div className="mb-3">
          <label htmlFor="person" className="form-label">
            Persons
          </label>
          <div className="mb-3">
            <select id="person" {...register("person")} className="form-select">
              <option value=""></option>
              {categories.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          {errors.person && (
            <p className="text-danger">{errors.person.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            {...register("date")}
            id="date"
            type="text"
            className="form-control"
          />
          {errors.date && <p className="text-danger">{errors.date.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="hours" className="form-label">
            Hours
          </label>
          <input
            {...register("hours", { valueAsNumber: true })}
            id="hours"
            type="number"
            className="form-control"
          />
          {errors.hours && (
            <p className="text-danger">{errors.hours.message}</p>
          )}
        </div>
        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default ExpenseForm;
