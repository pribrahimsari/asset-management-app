import {
  Box,
  Button,
  DialogTitle,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
  Stack,
  Textarea,
} from "@mui/joy";
import { useFormik } from "formik";
import { useMemo } from "react";
import { CreateAssetFormValues } from "src/types/CustomTypes.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAsset } from "src/api/apiService.ts";
import { createAssetFormSchema } from "src/validations/formValidations.ts";
import { useSnackbar } from "notistack";
import { assetTypes } from "src/data/constants.ts";

const CreateNewAssetModal = ({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  const createMutation = useMutation({
    mutationKey: ["createAsset"],
    mutationFn: createAsset,
    onSuccess: () =>
      queryClient
        .invalidateQueries({
          queryKey: ["assets"],
        })
        .then(() => {
          setOpen(false);
          resetForm();
          enqueueSnackbar("Success", { variant: "success" });
        }),
  });

  /*----- Formik Variables ------*/
  const initialValues: CreateAssetFormValues = useMemo(
    () => ({
      name: "",
      description: "",
      type_id: "",
      priority: "",
      addition_time: "",
    }),
    []
  );

  const handleSubmit = (values: CreateAssetFormValues) => {
    createMutation.mutate({ values });
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    setFieldValue,
    isValid,
    dirty,
    resetForm,
    submitForm,
  } = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: createAssetFormSchema,
  });
  /*----- Formik Variables ------*/

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog sx={{ minWidth: { xs: "95%", md: "40%", lg: "40%", xl: "35%" } }}>
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <DialogTitle>Add New Asset</DialogTitle>
        {/* FORM */}
        <Stack spacing={2}>
          <FormControl>
            <FormLabel>Name *</FormLabel>
            <Input
              required
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && !!errors.name}
              size="sm"
              autoFocus
              placeholder="Name for asset"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              name="description"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.description && !!errors.description}
              size="sm"
              placeholder="Description for asset"
              minRows={2}
              maxRows={4}
            />
          </FormControl>

          {/* todo */}
          <FormControl>
            <FormLabel>Type *</FormLabel>
            <Select
              required
              name="type_id"
              value={values.type_id}
              onChange={(_e, newValue) => setFieldValue("type_id", newValue)}
              onBlur={handleBlur}
              // error={touched.name && !!errors.name}
              color={touched.type_id && !!errors.type_id ? "danger" : undefined}
              variant="outlined"
              placeholder="Select an asset type"
              size="sm"
            >
              {assetTypes.map((type) => (
                <Option key={type.id} value={type.id.toString()}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </FormControl>

          {/* todo: is it possible to find a date/datetime picker for JoyUI */}
          <FormControl>
            <FormLabel>Addition Date</FormLabel>
            <Input
              type="date"
              name="addition_time"
              value={values.addition_time}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.addition_time && !!errors.addition_time}
              size="sm"
              slotProps={{
                input: {
                  min: "2020-06-07T00:00",
                  max: "2023-10-31T00:00",
                },
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Priority *</FormLabel>
            <Select
              required
              name="priority"
              value={values.priority}
              onChange={(_e, newValue) => setFieldValue("priority", newValue)}
              onBlur={handleBlur}
              // error={touched.name && !!errors.name}
              color={touched.priority && !!errors.priority ? "danger" : undefined}
              placeholder="Select priority"
              size="sm"
            >
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </FormControl>

          <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
            <Box width="33%">
              <Button
                fullWidth
                variant="outlined"
                color="warning"
                disabled={createMutation.isLoading}
                loading={createMutation.isLoading}
                onClick={() => {
                  resetForm();
                  setOpen(false);
                }}
              >
                Cancel
              </Button>
            </Box>

            <Box width="33%">
              <Button
                fullWidth
                variant="soft"
                color="danger"
                disabled={createMutation.isLoading}
                loading={createMutation.isLoading}
                onClick={() => {
                  resetForm();
                }}
              >
                Reset
              </Button>
            </Box>

            <Box width="33%">
              <Button
                fullWidth
                type="submit"
                onClick={submitForm}
                disabled={!(dirty && isValid) || createMutation.isLoading}
                loading={createMutation.isLoading}
              >
                Add
              </Button>
            </Box>
          </Box>
        </Stack>
      </ModalDialog>
    </Modal>
  );
};

export default CreateNewAssetModal;