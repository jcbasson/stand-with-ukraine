import wretch from "wretch";
import QueryStringAddon from "wretch/addons/queryString";

const createUrl = (url) => {
  const baseUrl = "https://stand-with-ukraine-api.vercel.app/";

  return `${baseUrl}${url}`;
};

export const get = (url, queryParams = {}, ignoreCodes) => {
  return wretch(createUrl(url))
    .addon(QueryStringAddon)
    .query(queryParams)
    .get()
    .badRequest((error) => {
      error.message = `GET Bad request '${url}'`;
      throw error;
    })
    .unauthorized((error) => {
      error.message = `GET Unauthorized request '${url}'`;
      throw error;
    })
    .forbidden((error) => {
      error.message = `GET Forbidden request '${url}'`;
      throw error;
    })
    .notFound((error) => {
      error.message = `GET Not Found request '${url}'`;
      throw error;
    })
    .timeout((error) => {
      error.message = `GET Request Timeout request '${url}'`;
      throw error;
    })
    .internalError((error) => {
      error.message = `GET Internal Error '${url}'`;
      throw error;
    })
    .fetchError((error) => {
      error.message = `GET Fetch error '${url}'`;
      throw error;
    })
    .json()
    .catch((error) => {
      if (ignoreCodes && ignoreCodes.includes(error.status)) {
        return error.json;
      }
      throw error;
    });
};

export const post = (url, body, queryParams = {}, ignoreCodes) => {
  //
  return wretch(createUrl(url))
    .addon(QueryStringAddon)
    .query(queryParams)
    .post(body)
    .badRequest((error) => {
      error.message = `POST Bad request '${url}'`;
      throw error;
    })
    .unauthorized((error) => {
      error.message = `POST Unauthorized request '${url}'`;
      throw error;
    })
    .forbidden((error) => {
      error.message = `POST Forbidden request '${url}'`;
      throw error;
    })
    .notFound((error) => {
      error.message = `POST Not Found request '${url}'`;
      throw error;
    })
    .timeout((error) => {
      error.message = `POST Request Timeout request '${url}'`;
      throw error;
    })
    .internalError((error) => {
      error.message = `POST Internal Error '${url}'`;
      throw error;
    })
    .fetchError((error) => {
      error.message = `POST Fetch error '${url}'`;
      throw error;
    })
    .json()
    .catch((error) => {
      if (ignoreCodes && ignoreCodes.includes(error.status)) {
        return error.json;
      }
      throw error;
    });
};

export const patch = (url, body, queryParams = {}, ignoreCodes) => {
  return wretch(createUrl(url))
    .addon(QueryStringAddon)
    .query(queryParams)
    .patch(body)
    .badRequest((error) => {
      error.message = `PATCH Bad request '${url}'`;
      throw error;
    })
    .unauthorized((error) => {
      error.message = `PATCH Unauthorized request '${url}'`;
      throw error;
    })
    .forbidden((error) => {
      error.message = `PATCH Forbidden request '${url}'`;
      throw error;
    })
    .notFound((error) => {
      error.message = `PATCH Not Found request '${url}'`;
      throw error;
    })
    .timeout((error) => {
      error.message = `PATCH Request Timeout request '${url}'`;
      throw error;
    })
    .internalError((error) => {
      error.message = `PATCH Internal Error '${url}'`;
      throw error;
    })
    .fetchError((error) => {
      error.message = `PATCH Fetch error '${url}'`;
      throw error;
    })
    .json()
    .catch((error) => {
      if (ignoreCodes && ignoreCodes.includes(error.status)) {
        return error.json;
      }
      throw error;
    });
};

export const deleteReq = (url, queryParams = {}, ignoreCodes) => {
  return wretch(createUrl(url))
    .addon(QueryStringAddon)
    .query(queryParams)
    .delete()
    .badRequest((error) => {
      error.message = `DELETE Bad request '${url}'`;
      throw error;
    })
    .unauthorized((error) => {
      error.message = `DELETE Unauthorized request '${url}'`;
      throw error;
    })
    .forbidden((error) => {
      error.message = `DELETE Forbidden request '${url}'`;
      throw error;
    })
    .notFound((error) => {
      error.message = `DELETE Not Found request '${url}'`;
      throw error;
    })
    .timeout((error) => {
      error.message = `DELETE Request Timeout request '${url}'`;
      throw error;
    })
    .internalError((error) => {
      error.message = `DELETE Internal Error '${url}'`;
      throw error;
    })
    .fetchError((error) => {
      error.message = `DELETE Fetch error '${url}'`;
      throw error;
    })
    .json()
    .catch((error) => {
      if (ignoreCodes && ignoreCodes.includes(error.status)) {
        return error.json;
      }
      throw error;
    });
};
